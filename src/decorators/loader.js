import { Component, PropTypes } from 'react';

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
        
        Loader.displayName = `Loader(${WrappedComponent.displayName})`;
        
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