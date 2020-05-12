import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr! It is cold',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9) {
        //js ternary expression
        return  latitude > 0 ? 'summer' : 'winter';
    }else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};
const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!!!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    );    
};

export default SeasonDisplay;