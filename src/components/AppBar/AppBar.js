import { PropTypes } from 'react';
import { AppBar as TopBar, IconButton } from 'react-toolbox';

import style from './style';

function AppBar({ onDrawerClick }) {
    return (
        <div className={style.container}>
            <TopBar className={style.header}>
                <IconButton
                    icon="menu" inverse
                    onClick={onDrawerClick}
                    className={style.menu}
                />
                
                <h1>FRI Urnik</h1>
            </TopBar>
        </div>
    );
}

AppBar.propTypes = {
    onDrawerClick: PropTypes.func.isRequired
};

export default AppBar;