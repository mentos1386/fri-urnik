import { List, ListItem } from 'react-toolbox/lib/list';

function Drawer() {
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

export default Drawer;