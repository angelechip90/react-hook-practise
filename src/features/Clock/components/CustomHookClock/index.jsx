import React from 'react';
import PropTypes from 'prop-types';
import useClock from '../../../../hooks/useClock';

CustomHookClock.propTypes = {

};


function CustomHookClock(props) {
    const { timeString } = useClock();
    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default CustomHookClock;