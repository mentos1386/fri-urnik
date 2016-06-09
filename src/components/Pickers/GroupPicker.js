import { Component, PropTypes } from 'react';
import { Button } from 'react-toolbox';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox';

import {
    YearSelector,
    GroupSelector,
    ProgramSelector
} from '~/containers/Selectors';

import style from './style';

class GroupPicker extends Component {
    
    state = {
        year: null,
        group: null,
        program: null
    };
    
    handleChange(key, value) {
        switch (key) {
            case 'year':
                this.setState({
                    year: value,
                    group: null,
                    program: null
                });
                break;
            case 'program':
                this.setState({
                    program: value,
                    group: null
                });
                break;
            case 'group':
                this.setState({
                    group: value
                });
                break;
        }
    }
    
    handleSelect() {
        this.props.onSelect(this.state.group);
    }
    
    render() {
        const { year, group, program } = this.state;
        
        return (
            <Card className={style.card}>
                <CardTitle title="Poišči urnik" />
                
                <CardText className={style.content}>
                    <YearSelector
                        value={year}
                        onChange={this.handleChange.bind(this, 'year')}
                    />
                    <ProgramSelector
                        value={program} forYear={year}
                        onChange={this.handleChange.bind(this, 'program')}
                    />
                    <GroupSelector
                        value={group} forProgram={program}
                        onChange={this.handleChange.bind(this, 'group')}
                    />
                </CardText>
                
                <CardActions className={style.actions}>
                    <Button
                        label="Odpri"
                        disabled={group == null}
                        onClick={::this.handleSelect}
                    />
                </CardActions>
            </Card>
        );
    }
    
}

GroupPicker.propTypes = {
    onSelect: PropTypes.func.isRequired
};

export default GroupPicker;