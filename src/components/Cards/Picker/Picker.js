import { Component, PropTypes } from 'react';
import { Dropdown, Button } from 'react-toolbox';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox';

import style from '../style';

class Picker extends Component {
    
    static propTypes = {
        onOpen: PropTypes.func.isRequired,
        
        values: PropTypes.shape({
            year: PropTypes.number,
            group: PropTypes.string,
            program: PropTypes.string
        }),
        
        sources: PropTypes.shape({
            years: PropTypes.arrayOf(PropTypes.number).isRequired,
            groups: PropTypes.arrayOf(PropTypes.object).isRequired,
            programs: PropTypes.arrayOf(PropTypes.object).isRequired
        }),
        
        onChange: PropTypes.shape({
            onSelectYear: PropTypes.func.isRequired,
            onSelectGroup: PropTypes.func.isRequired,
            onSelectProgram: PropTypes.func.isRequired
        })
    };
    
    getYears() {
        const { years } = this.props.sources;
        
        return years.map(year => ({
            value: year,
            label: `${year}. letnik`
        }));
    }
    
    getPrograms() {
        const { programs } = this.props.sources;
        
        return programs.map(program => ({
            value: program.id,
            label: program.name
        }));
    }
    
    getGroups() {
        const { groups } = this.props.sources;
        const { program } = this.props.values;
        
        return [{
            value: program,
            label: 'Brez skupine'
        }, ...groups.map(group => ({
            value: group.id,
            label: `${group.group}. skupina`
        }))];
    }
    
    render() {
        const { values, onOpen, onChange } = this.props;
        
        const { year, program, group } = values;
        const { onSelectYear, onSelectProgram, onSelectGroup } = onChange;
        
        return (
            <Card className={style.card}>
                <CardTitle title="Izberi urnik" />
                
                <CardText className={style.content}>
                    <Dropdown
                        label="Letnik"
                        value={year}
                        source={this.getYears()}
                        onChange={onSelectYear}
                    />
                    <Dropdown
                        label="Program"
                        value={program}
                        source={this.getPrograms()}
                        onChange={onSelectProgram}
                        disabled={year == null}
                    />
                    <Dropdown
                        label="Skupina"
                        value={group}
                        source={this.getGroups()}
                        onChange={onSelectGroup}
                        disabled={program == null}
                    />
                </CardText>
                
                <CardActions className={style.actions}>
                    <Button
                        label="Odpri"
                        disabled={group == null}
                        onClick={onOpen}
                    />
                </CardActions>
            </Card>
        );
    }
    
}

export default Picker;