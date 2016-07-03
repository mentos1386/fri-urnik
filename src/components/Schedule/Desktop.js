import { Component, PropTypes } from 'react';
import { Card } from 'react-toolbox/lib/card';
import groupBy from 'lodash/groupBy';
import range from 'lodash/range';

import Schedule from './Schedule';

import style from './style';
import dayNames from './days';

class Desktop extends Component {
    
    render() {
        const { allocations } = this.props;
        
        const groups = groupBy(allocations, allocation => allocation.day);
        const days = dayNames.map((day, index) => groups[index] || []);
        
        return (
            <Card className={style.container}>
                { this.renderHours() }
                { days.map(::this.renderDay) }
            </Card>
        );
    }
    
    renderHours() {
        return (
            <div className={style.hours}>
                { range(7, 22).map(hour => (
                    <p key={hour} className={style.hour}>{hour}h</p>
                )) }
            </div>
        );
    }
    
    renderDay(allocations, day) {
        return (
            <Schedule
                key={day}
                day={parseInt(day, 10)}
                allocations={allocations}
            />
        );
    }
    
}

Desktop.propTypes = {
    allocations: PropTypes.array.isRequired
};

export default Desktop;