import { PropTypes } from 'react';
import { Input, Button } from 'react-toolbox';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox';

import style from '../style';

function Finder({ value, onOpen, onChange }) {
    const disabled = value.length < 8;
    
    return (
        <Card className={style.card}>
            <CardTitle title="Poišči urnik" />
            
            <CardText className={style.content}>
                <Input
                    label="Vpisna številka" type="number" maxLength={8}
                    value={value} onChange={onChange}
                />
            </CardText>
            
            <CardActions className={style.actions}>
                <Button
                    label="Odpri"
                    disabled={disabled}
                    onClick={onOpen}
                />
            </CardActions>
        </Card>
    );
}

Finder.defaultProps = {
    value: ''
};

Finder.propTypes = {
    value: PropTypes.string,
    onOpen: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Finder;