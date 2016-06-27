import { PropTypes } from 'react';
import TopBar from 'react-toolbox/lib/app_bar';
import { IconButton } from 'react-toolbox/lib/button';

import style from './style';

const theme = {
    appBar: style.header,
    neutral: style.menu,
    icon: style.icon
};

function AppBar({ title, onDrawerOpen }) {
    return (
        <div className={style.container}>
            <TopBar theme={theme}>
                <IconButton
                    icon="menu" inverse
                    onClick={onDrawerOpen}
                    theme={theme}
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