import { Component } from 'react';
import { AppBar, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel } from 'react-toolbox';

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
                    
                </NavDrawer>
                
                <Panel className={style.panel}>
                    <AppBar className={style.header}>
                        <IconButton
                            icon="menu" inverse
                            onClick={::this.toggleDrawer}
                            className={style.menu}
                        />
                        <h1>
                            FRI Urnik
                        </h1>
                    </AppBar>
                    
                    { children }
                </Panel>
            </Layout>
        );
    }
    
}

export default Root;