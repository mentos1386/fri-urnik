import { Component, PropTypes } from 'react';

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function loader(handler) {
    function wrapWithLoader(WrappedComponent) {
        class Loader extends Component {
            componentWillMount() {
                this.onLoad(this.props);
            }
            
            componentWillReceiveProps(nextProps) {
                this.onLoad(nextProps);
            }
            
            onLoad(props) {
                const { dispatch } = this.context.store;
                
                handler({ ...props, dispatch });
            }
            
            render() {
                return <WrappedComponent {...this.props} />;
            }
        }
        
        Loader.displayName = `Loader(${getDisplayName(WrappedComponent)})`;
        
        Loader.contextTypes = {
            store: PropTypes.shape({
                dispatch: PropTypes.func.isRequired
            }).isRequired
        };
        
        return Loader;
    }
    
    return wrapWithLoader;
}

export default loader;