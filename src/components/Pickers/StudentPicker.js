import { Component, PropTypes } from 'react';
import { Input, Button } from 'react-toolbox';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox';

import style from './style';

class StudentPicker extends Component {

    state = {
        value: ''
    };

    handleChange(value) {
        if (value.length <= 8) {
            this.setState({ value });
        }
    }
    
    handleSelect() {
        this.props.onSelect(this.state.value);
    }

    render() {
        const { value } = this.state;
        
        const disabled = value.length < 8;
        
        return (
            <Card className={style.card}>
                <CardTitle title="Poišči urnik" />
                
                <CardText className={style.content}>
                    <Input
                        type="number"
                        maxLength={8}
                        label="Vpisna številka"
                        value={value}
                        onChange={::this.handleChange}
                    />
                </CardText>
                
                <CardActions className={style.actions}>
                    <Button
                        label="Odpri"
                        disabled={disabled}
                        onClick={::this.handleSelect}
                    />
                </CardActions>
            </Card>
        );
    }
    
}

StudentPicker.propTypes = {
    onSelect: PropTypes.func.isRequired
};

export default StudentPicker;