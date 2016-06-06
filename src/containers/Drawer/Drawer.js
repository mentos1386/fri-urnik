import { Component } from 'react';
import { List, ListItem } from 'react-toolbox';

class Drawer extends Component {
    
    render() {
        return (
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
        );
    }
    
}

export default Drawer;