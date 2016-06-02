import { Card, CardText, CardTitle } from 'react-toolbox';
import cx from 'classnames';

import style from './style';

function Allocation({ activity, classroom, teacher, lecture }) {
    const allocation = cx(style.allocation, {
       [style.lecture]: lecture
    });
    
    return (
        <Card className={allocation}>
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

export default Allocation;