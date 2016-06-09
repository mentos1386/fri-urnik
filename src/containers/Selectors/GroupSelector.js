import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'react-toolbox';

import { fetchGroups } from '~/actions/programs';
import { selectGroups } from '~/selectors/programs';

class ProgramSelector extends Component {
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.forProgram != this.props.forProgram) {
            this.props.dispatch(fetchGroups(nextProps.forProgram));
        }
    }
    
    render() {
        return <Dropdown {...this.props} />;
    }
    
}

const Container = connect((state, { forProgram }) => {
    return {
        disabled: forProgram == null,
        source: selectGroups(state, { program: forProgram })
    };
})(ProgramSelector);

Container.defaultProps = {
    label: 'Skupina'
};

Container.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    forProgram: PropTypes.string,
    onChange: PropTypes.func
};

export default Container;