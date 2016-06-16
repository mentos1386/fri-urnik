import { Component, PropTypes } from 'react';
import { Input, Button } from 'react-toolbox';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox';

import style from '../style';

class StudentPicker extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.student !== nextProps.student;
    }

    handleChange(value) {
        if (value.length <= 8) {
            this.props.setStudent(value);
        }
    }
    
    handleSelect() {
        this.props.onOpen(this.props.student);
    }

    render() {
        const { student } = this.props;
        
        const disabled = student.length < 8;
        
        return (
            <Card className={style.card}>
                <CardTitle title="Poišči urnik" />
                
                <CardText className={style.content}>
                    <Input
                        type="number"
                        maxLength={8}
                        label="Vpisna številka"
                        value={student}
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

StudentPicker.defaultProps = {
    student: ''
};

StudentPicker.propTypes = {
    student: PropTypes.string,
    setStudent: PropTypes.func.isRequired,
    
    onOpen: PropTypes.func.isRequired
};

export default StudentPicker;