import { Component, PropTypes } from 'react';
import Button from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import style from '../style';

class GroupPicker extends Component {
    
    shouldComponentUpdate(nextProps) {
        return Object.keys(nextProps)
            .filter(key => key !== 'onOpen')
            .some(key => this.props[key] !== nextProps[key]);
    }
    
    handleSelect() {
        this.props.onOpen(this.props.group);
    }
    
    render() {
        return (
            <Card className={style.card}>
                <CardTitle title="Poišči urnik" />
                
                <CardText className={style.content}>
                    <Dropdown
                        label="Letnik"
                        value={this.props.year}
                        source={this.props.years}
                        onChange={this.props.setYear}
                    />
                    <Dropdown
                        label="Program"
                        value={this.props.program}
                        source={this.props.programs}
                        onChange={this.props.setProgram}
                        disabled={this.props.year == null}
                    />
                    <Dropdown
                        label="Skupina"
                        value={this.props.group}
                        source={this.props.groups}
                        onChange={this.props.setGroup}
                        disabled={this.props.program == null}
                    />
                </CardText>
                
                <CardActions className={style.actions}>
                    <Button
                        label="Odpri"
                        disabled={this.props.group == null}
                        onClick={::this.handleSelect}
                    />
                </CardActions>
            </Card>
        );
    }
    
}

GroupPicker.defaultProps = {
    year: null,
    group: null,
    program: null
};

GroupPicker.propTypes = {
    year: PropTypes.number,
    group: PropTypes.string,
    program: PropTypes.string,
    
    years: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    
    groups: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    
    programs: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    
    setYear: PropTypes.func.isRequired,
    setGroup: PropTypes.func.isRequired,
    setProgram: PropTypes.func.isRequired,
    
    onOpen: PropTypes.func.isRequired
};

export default GroupPicker;