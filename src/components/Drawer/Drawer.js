import { Component } from 'react';
import classNames from 'classnames';
import { NavDrawer } from 'react-toolbox/lib/layout';
import { List, ListItem } from 'react-toolbox/lib/list';

import style from './style';

const MIN_DISTANCE = 8;
const DRAG_THRESHOLD = 32;

const MIN_OFFSET = 55;
const MAX_WIDTH = 320;

const SPEED_THRESHOLD = 0.2;

class Drawer extends Component {
    
    state = {
        open: false,
        ready: false,
        
        dragging: false,
        dragStart: 0,
        
        width: 0
    };
    
    firstTouch = null;
    lastTouch = null;
    
    constructor() {
        super();
        
        this.resize = ::this.resize;
        this.touchEnd = ::this.touchEnd;
        this.touchMove = ::this.touchMove;
        this.touchStart = ::this.touchStart;
        this.touchCancel = ::this.touchCancel;
    }
    
    componentWillMount() {
        window.addEventListener('resize', this.resize, true);
        window.addEventListener('touchend', this.touchEnd, true);
        window.addEventListener('touchmove', this.touchMove, true);
        window.addEventListener('touchstart', this.touchStart, true);
        window.addEventListener('touchcancel', this.touchCancel, true);
    }
    
    componentDidMount() {
        this.resize();
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
        window.removeEventListener('touchend', this.touchEnd);
        window.removeEventListener('touchmove', this.touchMove);
        window.removeEventListener('touchstart', this.touchStart);
        window.removeEventListener('touchcancel', this.touchCancel);
    }
    
    resize() {
        this.setState({
            width: Math.min(MAX_WIDTH, window.innerWidth - MIN_OFFSET)
        });
    }
    
    touchStart(event) {
        const { open } = this.state;
        
        const touch = event.touches[0];
        
        if (touch.clientX > MIN_DISTANCE && !open) return;
        
        event.stopPropagation();
        
        this.firstTouch = touch;
        this.setState({ dragStart: Date.now() });
    }
    
    touchMove(event) {
        const touch = this.lastTouch = event.touches[0];
        
        if (this.state.dragging) {
            event.preventDefault();
            event.stopPropagation();
            
            this.setPosition(touch.clientX);
            return;
        }
        
        if (this.firstTouch) {
            const dx = Math.abs(this.firstTouch.clientX - touch.clientX);
            const dy = Math.abs(this.firstTouch.clientY - touch.clientY);
            
            if (dx > MIN_DISTANCE && dy <= MIN_DISTANCE) {
                this.setState({
                    ready: true,
                    dragging: true
                });
                
                this.setPosition(touch.clientX);
            } else if (dx <= MIN_DISTANCE && dy > MIN_DISTANCE) {
                this.touchCancel(event);
            }
        }
    }
    
    shouldToggle() {
        const { open, width } = this.state;
        
        const position = this.lastTouch.clientX;
        const distance = position - this.firstTouch.clientX;
        
        const elapsed = Date.now() - this.state.dragStart;
        const speed = distance / elapsed;
        
        if (open) {
            return speed < SPEED_THRESHOLD || position < width / 2;
        } else {
            return speed > SPEED_THRESHOLD || position > width / 2;
        }
    }
    
    touchEnd(event) {
        if (this.state.dragging) {
            const { open } = this.state;
            const toggle = this.shouldToggle();
            
            if (toggle) {
                this.toggle();
            }
            
            if (open == toggle) {
                this.setPosition(0);
            }
        }
        
        this.touchCancel(event);
    }
    
    touchCancel(event) {
        this.setState({
            dragging: false,
            dragStart: 0
        });
        
        this.firstTouch = null;
        this.lastTouch = null;
    }
    
    setPosition(position) {
        const { width } = this.state;
        
        const x = Math.min(position - width, 0);
        const opacity = Math.min(Math.max(position / width, 0), 1);
        
        this.refs.scrim.style.opacity = opacity;
        this.refs.drawer.style.transform = `translate3d(${x}px, 0, 0)`;
    }
    
    toggle() {
        this.setState({
            ready: true,
            open: !this.state.open
        });
    }
    
    getOverlayStyle() {
        if (this.state.dragging) {
            return { width: '100%' };
        } else {
            return {};
        }
    }
    
    getScrimStyle() {
        const { dragging, ready, open } = this.state;
        
        let style = { opacity: 0 };
        
        if (dragging) {
            return { ...style, transition: 'none' };
        }
        
        if (open) {
            return { ...style, opacity: 1 };
        }
        
        if (!ready) {
            return { ...style, transition: 'none' };
        }
        
        return style;
    }
    
    getDrawerStyle() {
        const { width, dragging, ready, open } = this.state;
        
        let style = {
            width: `${width}px`,
            transform: `translate3d(-${width}px, 0, 0)`
        };
        
        if (dragging) {
            return { ...style, transition: 'none' };
        }
        
        if (open) {
            return { ...style, transform: 'translate3d(0, 0, 0)' };
        }
        
        if (!ready) {
            return { ...style, transition: 'none' };
        }
        
        return style;
    }
    
    render() {
        const { open } = this.state;
        
        const overlay = classNames(style.overlay, {
            [style.active]: open
        });
        
        return (
            <div
                className={overlay}
                onClick={::this.toggle}
                style={this.getOverlayStyle()}
            >
                <div
                    className={style.scrim}
                    style={this.getScrimStyle()}
                    ref="scrim"
                />
                <aside
                    className={style.drawer}
                    style={this.getDrawerStyle()}
                    ref="drawer"
                >
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
                </aside>
            </div>
        );
    }
    
}

// Override display name to suppress warnings
Drawer.displayName = NavDrawer.displayName;

export default Drawer;