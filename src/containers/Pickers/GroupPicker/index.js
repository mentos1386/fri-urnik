import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
    setYear,
    setGroup,
    setProgram
} from '~/actions/pickers';

import {
    getSelection,
    getYears,
    getPrograms,
    getGroups
} from '~/selectors/pickers';

import GroupPicker from './GroupPicker';

const GroupPickerContainer = connect(
    (state) => ({
        ...getSelection(state),
        
        years: getYears(state),
        programs: getPrograms(state),
        groups: getGroups(state)
    }), {
        setYear,
        setGroup,
        setProgram,
        
        onOpen: (id) => push(`/group/${id}`)
    }
)(GroupPicker);

export default GroupPickerContainer;