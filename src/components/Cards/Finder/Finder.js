import { Component } from 'react';
import { Input, Button } from 'react-toolbox';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox';

import style from '../style';

class Finder extends Component {
    
    render() {
        const { value, onChange } = this.props;
        
        const disabled = !value || value.length < 8;
        
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
                    <Button label="Odpri" disabled={disabled} />
                </CardActions>
            </Card>
        );
    }
    
}

export default Finder;