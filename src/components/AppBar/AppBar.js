import { PropTypes } from 'react';
import { AppBar as TopBar, IconButton } from 'react-toolbox';

import style from './style';

function AppBar({ title, onDrawerOpen }) {
    return (
        <div className={style.container}>
            <TopBar className={style.header}>
                <IconButton
                    icon="menu" inverse
                    onClick={onDrawerOpen}
                    className={style.menu}
                />
                
                <h1>{ title }</h1>
            </TopBar>
        </div>
    );
}

AppBar.propTypes = {
    title: PropTypes.string.isRequired,
    onDrawerOpen: PropTypes.func.isRequired
};

export default AppBar;