import { Component } from 'react';
import { NavDrawer } from 'react-toolbox/lib/layout';
import { List, ListItem } from 'react-toolbox/lib/list';

class Drawer extends Component {
    
    state = {
        open: false
    };
    
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
    
    render() {
        const { open } = this.state;
        
        return (
            <NavDrawer active={open} onOverlayClick={::this.toggle}>
                <List selectable ripple>
                    <ListItem
                        caption="Pregled"
                        leftIcon="home"
                    />
                    <ListItem
                        caption="Urnik"
                        leftIcon="today"
                    />
                </List>
            </NavDrawer>
        );
    }
    
}

// Override display name to suppress warnings
Drawer.displayName = NavDrawer.displayName;

export default Drawer;