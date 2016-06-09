import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'react-toolbox';

import { requestPrograms } from '~/actions/programs';
import { selectYears } from '~/selectors/programs';

class YearSelector extends Component {
    
    componentWillMount() {
        this.props.dispatch(requestPrograms());
    }
    
    render() {
        return <Dropdown {...this.props} />;
    }
    
}

const Container = connect((state) => {
    return {
        source: selectYears(state)
    };
})(YearSelector);

Container.defaultProps = {
    label: 'Letnik'
};

Container.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default Container;