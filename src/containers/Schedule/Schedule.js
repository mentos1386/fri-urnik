import { Component } from 'react';
import { connect } from 'react-redux';
import { toPairs } from 'lodash';

import { fetchSchedule } from '~/actions/schedules';

class Schedule extends Component {
    
    componentWillMount() {
        const { id, field } = this.getParams();
        
        this.props.dispatch(fetchSchedule(id, field));
    }
    
    getParams() {
        const [ field, id ] = toPairs(this.props.params)[0];
        
        return { id, field };
    }
    
    getSchedule() {
        const { schedules } = this.props;
        const { id, field } = this.getParams();
        
        if (!schedules[field] || !schedules[field][id]) {
            return {};
        }
        
        return schedules[field][id];
    }
    
    render() {
        const { parent, allocations, loading } = this.getSchedule();
        
        console.log({ parent, allocations, loading });
        
        return <div />;
    }
    
}

const connector = connect(state => {
    const { schedules } =  state;
    
    return { schedules };
});

export default connector(Schedule);