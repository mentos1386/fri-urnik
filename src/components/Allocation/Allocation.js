import { PropTypes } from 'react';
import { Card, CardText, CardTitle } from 'react-toolbox';
import cx from 'classnames';

import style from './style';

function Allocation({ activity, classroom, teacher, lecture }) {
    const className = cx(style.allocation, {
       [style.lecture]: lecture
    });
    
    return (
        <Card className={className}>
            <CardTitle
                title={activity}
                subtitle={classroom}
                className={style.title}
            />
            <CardText
                children={teacher}
                className={style.text}
            />
        </Card>
    );
}

Allocation.defaultProps = {
    lecture: false
};

Allocation.propTypes = {
    activity: PropTypes.string.isRequired,
    classroom: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    lecture: PropTypes.bool
};

export default Allocation;