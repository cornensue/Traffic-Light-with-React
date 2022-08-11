import React, {useState} from "react";

const TrafficLight = () => {
    const [color, setColor] = useState('red');
    
    const colors = ['red', 'yellow', 'green'];
    
    const red = color === colors[0] ? 'active' : '';
    const yellow = color === colors[1] ? 'active' : '';
    const green = color === colors[2] ? 'active' : '';
    
    return <>
            <div className={`traffict-light`}>
                <div className={`red light ${red}`} onClick={() => setColor(colors[0])}></div>
                <div className={`yellow light ${yellow}`} onClick={() => setColor(colors[1])}></div>
                <div className={`green light ${green}`} onClick={() => setColor(colors[2])}></div>
            </div>
        </>
}

export default TrafficLight;