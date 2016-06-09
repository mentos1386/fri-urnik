import { Component, PropTypes } from 'react';
import { Layout, NavDrawer, Panel } from 'react-toolbox';

import { AppBar, Drawer } from '~/components';

import style from './style';

class RootView extends Component {
    
    state = {
        drawerOpen: false
    };
    
    toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }
    
    render() {
        const { drawerOpen } = this.state;
        const { title, children } = this.props;
        
        return (
            <Layout className={style.layout}>
                <NavDrawer
                    active={drawerOpen}
                    onOverlayClick={::this.toggleDrawer}
                    children={(<Drawer />)}
                />
                
                <Panel className={style.panel}>
                    <AppBar
                        title={title}
                        onDrawerOpen={::this.toggleDrawer}
                    />
                    
                    <div className={style.wrapper}>
                        { children }
                    </div>
                </Panel>
            </Layout>
        );
    }
    
}

RootView.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default RootView;