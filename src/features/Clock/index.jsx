import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Clock from './components/Clock';
import CustomHookClock from './components/CustomHookClock';

ClockFeature.propTypes = {

};

function ClockFeature(props) {
    const [showClock, setShowClock] = useState(true);

    return (
        <div>
            {showClock && <Clock />}
            <CustomHookClock />
            <button onClick={() => setShowClock(false)}>Hide clock</button>
        </div>
    );
}

export default ClockFeature;