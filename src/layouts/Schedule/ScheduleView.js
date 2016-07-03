import { Component, PropTypes } from 'react';

import { Mobile, Desktop } from '~/components/Schedule';

import style from './style';

const BREAKPOINT = parseInt(style.breakpoint, 10);

class ScheduleView extends Component {
    
    state = {
        mobile: true
    };
    
    constructor() {
        super();
        
        this.resize = ::this.resize;
    }
    
    componentWillMount() {
        window.addEventListener('resize', this.resize);
        
        this.resize();
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }
    
    resize() {
        const mobile = window.innerWidth < BREAKPOINT;
        
        if (mobile != this.state.mobile) {
            this.setState({ mobile });
        }
    }
    
    render() {
        const props = {
            allocations: this.props.allocations
        };
        
        if (this.state.mobile) {
            return <Mobile {...props} />;
        } else {
            return <Desktop {...props} />;
        }
    }
    
}

ScheduleView.propTypes = {
    parent: PropTypes.object.isRequired,
    allocations: PropTypes.array.isRequired
};

export default ScheduleView;