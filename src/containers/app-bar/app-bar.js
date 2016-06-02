import { Component } from 'react';
import { AppBar as TopBar, IconButton } from 'react-toolbox';

import style from './style';

class AppBar extends Component {
    
    render() {
        const { onDrawerClick } = this.props;
        
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
    
}

export default AppBar;