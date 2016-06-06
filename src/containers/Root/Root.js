import { Component } from 'react';
import { Layout, NavDrawer, Panel } from 'react-toolbox';

import { Drawer } from '~/containers';
import { AppBar } from '~/components';

import style from './style';

class Root extends Component {
    
    state = {
        drawer: false
    };
    
    toggleDrawer() {
        this.setState({ drawer: !this.state.drawer });
    }
    
    render() {
        const { drawer } = this.state;
        const { children } = this.props;
        
        return (
            <Layout className={style.layout}>
                <NavDrawer
                    active={drawer}
                    onOverlayClick={::this.toggleDrawer}
                >
                    <Drawer />
                </NavDrawer>
                
                <Panel className={style.panel}>
                    <AppBar onDrawerClick={::this.toggleDrawer} />
                    
                    <div className={style.wrapper}>
                        { children }
                    </div>
                </Panel>
            </Layout>
        );
    }
    
}

export default Root;