import { Component, PropTypes } from 'react';
import { Layout, Panel } from 'react-toolbox/lib/layout';

import { AppBar, Drawer } from '~/components';

import style from './style';

class RootView extends Component {
    
    openDrawer() {
        this.refs.drawer.toggle();
    }
    
    render() {
        const { title, children } = this.props;
        
        return (
            <Layout theme={style}>
                <Drawer ref="drawer" />
                
                <Panel theme={style}>
                    <AppBar
                        title={title}
                        onDrawerOpen={::this.openDrawer}
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