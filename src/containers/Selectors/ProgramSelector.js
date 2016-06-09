import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'react-toolbox';

import { requestPrograms } from '~/actions/programs';
import { selectPrograms } from '~/selectors/programs';

class ProgramSelector extends Component {
    
    componentWillMount() {
        this.props.dispatch(requestPrograms());
    }
    
    render() {
        return <Dropdown {...this.props} />;
    }
    
}

const Container = connect((state, { forYear }) => {
    return {
        disabled: forYear == null,
        source: selectPrograms(state, { year: forYear })
    };
})(ProgramSelector);

Container.defaultProps = {
    label: 'Program'
};

Container.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    forYear: PropTypes.number,
    onChange: PropTypes.func
};

export default Container;