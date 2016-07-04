import { Component, PropTypes } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import groupBy from 'lodash/groupBy';

import Schedule from './Schedule';

import style from './style';
import dayNames from './days';

class Mobile extends Component {
    
    state = {
        active: 0
    };
    
    constructor() {
        super();
        
        this.resize = ::this.resize;
    }
    
    componentWillMount() {
        window.addEventListener('resize', this.resize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }
    
    resize() {
        this.forceUpdate();
    }
    
    handleChange(active) {
        this.setState({ active });
    }
    
    render() {
        const { active } = this.state;
        const { allocations } = this.props;
        
        const groups = groupBy(allocations, allocation => allocation.day);
        const days = dayNames.map((day, index) => groups[index] || []);
        
        return (
            <div className={style.container}>
                <Tabs
                    theme={style}
                    index={active}
                    onChange={::this.handleChange}
                >
                    { dayNames.map(::this.renderTab) }
                </Tabs>
                
                <SwipeableViews
                    index={active}
                    className={style.tabContent}
                    onChangeIndex={::this.handleChange}
                    containerStyle={{ height: 'auto' }}
                >
                    { days.map(this.renderDay) }
                </SwipeableViews>
            </div>
        );
    }
    
    renderTab(day) {
        return <Tab key={day} label={day} theme={style} />;
    }
    
    renderDay(allocations, day) {
        return (
            <Schedule
                compact
                key={day}
                day={parseInt(day, 10)}
                allocations={allocations}
            />
        );
    }
    
}

Mobile.propTypes = {
    allocations: PropTypes.array.isRequired
};

export default Mobile;