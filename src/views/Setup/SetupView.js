import { PropTypes } from 'react';

import { StudentPicker, GroupPicker } from '~/components/Pickers';

function SetupView({ openSchedule }) {
    return (
        <div>
            <StudentPicker onSelect={(id) => openSchedule(id, 'student')} />
            <GroupPicker onSelect={(id) => openSchedule(id, 'group')} />
        </div>
    );
}

SetupView.propTypes = {
    openSchedule: PropTypes.func.isRequired
};

export default SetupView;