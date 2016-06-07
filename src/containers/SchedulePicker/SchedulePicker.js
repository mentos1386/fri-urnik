import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPrograms, fetchGroups } from '~/actions/programs';

import { Finder, Picker } from '~/components/Cards';

class SchedulePicker extends Component {
    
    static propTypes = {
        years: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            items: PropTypes.arrayOf(PropTypes.number).isRequired
        }),
        
        groups: PropTypes.objectOf(PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            items: PropTypes.arrayOf(PropTypes.object).isRequired
        })),
        
        programs: PropTypes.objectOf(PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            items: PropTypes.arrayOf(PropTypes.object).isRequired
        }))
    };
    
    state = {
        student: '',
        
        year: null,
        program: null,
        group: null
    };
    
    componentWillMount() {
        this.props.dispatch(fetchPrograms());
    }
    
    getYears() {
        const { years } = this.props;
        
        return years.items;
    }
    
    getPrograms() {
        const { year } = this.state;
        const { programs } = this.props;
        
        if (year == null || !programs[year]) {
            return [];
        } else {
            return programs[year].items;
        }
    }
    
    getGroups() {
        const { program } = this.state;
        const { groups } = this.props;
        
        if (program == null || !groups[program]) {
            return [];
        } else {
            return groups[program].items;
        }
    }
    
    updateStudent(student) {
        if (student.length <= 8) {
            this.setState({ student });
        }
    }
    
    updateYear(year) {
        if (this.state.year != year) {
            this.setState({
                program: null,
                group: null,
                year
            });
        }
    }
    
    updateProgram(program) {
        if (this.state.program != program) {
            this.props.dispatch(fetchGroups(program));
            
            this.setState({
                group: null,
                program
            });
        }
    }
    
    updateGroup(group) {
        if (this.state.group != group) {
            this.setState({
                group
            });
        }
    }
    
    openFinder() {
        console.log(this.state.student);
    }
    
    openPicker() {
        console.log(this.state.group);
    }
    
    render() {
        const { student } = this.state;
        const { year, program, group } = this.state;
        
        const values = {
            year,
            program,
            group
        };
        
        const sources = {
            years: this.getYears(),
            groups: this.getGroups(),
            programs: this.getPrograms()
        };
        
        const updatePicker = {
            onSelectYear: ::this.updateYear,
            onSelectGroup: ::this.updateGroup,
            onSelectProgram: ::this.updateProgram
        };
        
        return (
            <div>
                <Finder
                    value={student}
                    onOpen={::this.openFinder}
                    onChange={::this.updateStudent}
                />
                <Picker
                    values={values}
                    sources={sources}
                    onOpen={::this.openPicker}
                    onChange={updatePicker}
                />
            </div>
        );
    }
    
}

const connector = connect(state => {
    const { programs } = state;
    
    return {
        years: programs.years,
        programs: programs.programsByYear,
        groups: programs.groupsByProgram
    };
});

export default connector(SchedulePicker);