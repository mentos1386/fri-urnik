import { Component, PropTypes } from 'react';

import { Allocation } from '~/components';

import style from './style';
import dayNames from './days';

class Schedule extends Component {
    
    emptyDuration(current, previous) {
        if (previous) {
            return current.hour - (previous.hour + previous.duration);
        } else {
            return current.hour - 7;
        }
    }
    
    render() {
        const { day, allocations } = this.props;
        
        return (
            <div className={style.schedule}>
                <h3 className={style.day}>{ dayNames[day] }</h3>
                { allocations.map(::this.renderAllocation) }
            </div>
        );
    }
    
    renderAllocation(allocation, index) {
        const { compact, allocations } = this.props;
        
        const skipped = this.emptyDuration(allocation, allocations[index - 1]);
    
        return (
            <div key={allocation.hour}>
                <p className={style.duration}>
                    {allocation.hour}h - {allocation.hour + allocation.duration}h
                </p>
                
                <Allocation compact={compact} skipped={skipped} {...allocation} />
            </div>
        );
    }
    
}

Schedule.defaultProps = {
    compact: false
};

Schedule.propTypes = {
    compact: PropTypes.bool,
    day: PropTypes.number.isRequired,
    allocations: PropTypes.array.isRequired
};

export default Schedule;