import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
    setStudent
} from '~/actions/pickers';

import {
    getStudent,
} from '~/selectors/pickers';

import StudentPicker from './StudentPicker';

const StudentPickerContainer = connect(
    (state) => ({
        student: getStudent(state)
    }), {
        setStudent,
        
        onOpen: (id) => push(`/student/${id}`)
    }
)(StudentPicker);

export default StudentPickerContainer;