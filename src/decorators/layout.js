import { Component, PropTypes } from 'react';

import { setTitle, resetTitle } from '~/actions/app';

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function layout({ title } = {}) {
    function wrapWithLayout(WrappedComponent) {
        class Layout extends Component {
            
            componentWillMount() {
                this.update(this.props);
            }
            
            componentWillReceiveProps(nextProps) {
                this.update(nextProps);
            }
            
            update(props) {
                const { dispatch } = this.context.store;
                
                if (title) {
                    dispatch(setTitle(title(props)));
                } else {
                    dispatch(resetTitle());
                }
            }
            
            render() {
                return <WrappedComponent {...this.props} />;
            }
            
        }
        
        Layout.displayName = `Layout(${getDisplayName(WrappedComponent)})`;
        
        Layout.contextTypes = {
            store: PropTypes.shape({
                dispatch: PropTypes.func.isRequired
            }).isRequired
        };
        
        return Layout;
    }
    
    return wrapWithLayout;
}

export default layout;