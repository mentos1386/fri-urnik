import { Component } from 'react';
import { Layout, NavDrawer, Panel } from 'react-toolbox';

import { AppBar, Drawer } from '~/containers';
import style from './style';

class Root extends Component {
    
    state = {
        drawer: false
    };
    
    toggleDrawer() {
        this.setState({ drawer: !this.state.drawer });
    }
    
    closeDrawer() {
        this.setState({ drawer: false });
    }
    
    render() {
        const { drawer } = this.state;
        const { children } = this.props;
        
        return (
            <Layout className={style.layout}>
                <NavDrawer active={drawer} onOverlayClick={::this.closeDrawer}>
                    <Drawer />
                </NavDrawer>
                
                <Panel className={style.panel}>
                    <AppBar onDrawerClick={::this.toggleDrawer} />
                    
                    { children }
                </Panel>
            </Layout>
        );
    }
    
}

export default Root;