import { PropTypes } from 'react';
import classNames from 'classnames';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

import style from './style';

function Allocation(props) {
    const { activity, duration, skipped, classroom, teachers } = props;
    
    const className = classNames(style.allocation, {
        [style.lecture]: activity.lecture,
        [style[`skipped-${skipped}`]]: !props.compact,
        [style[`duration-${duration}`]]: !props.compact,
    });
    
    return (
        <Card className={className}>
            <CardTitle title={activity.name} theme={style} />
            <CardText children={classroom.name} />
            
            { teachers.map(teacher => (
                <CardText
                    key={teacher.id}
                    children={teacher.name}
                    className={style.teacher}
                />
            )) }
        </Card>
    );
}

Allocation.defaultProps = {
    compact: false
};

Allocation.propTypes = {
    compact: PropTypes.bool,
    
    activity: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lecture: PropTypes.bool.isRequired
    }).isRequired,
    
    skipped: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    
    classroom: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    
    teachers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};

export default Allocation;