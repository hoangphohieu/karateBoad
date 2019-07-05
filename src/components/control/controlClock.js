import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SelectTime from './Select';
import Button from '@material-ui/core/Button';


const ControlClock = (props) => {
    const { socket } = props;
    const [timeDown, settimeDown] = useState(90);
    const [play, setplay] = useState(false);
    const isplay = () => { setplay(!play);
        clearTimeout(playtimedown) };
    const timeUpOne = () => { settimeDown(timeDown + 1);
        clearTimeout(playtimedown) };
    const timeDownOne = () => { settimeDown(timeDown - 1);
        clearTimeout(playtimedown) };

    function selectTime(value) { clearTimeout(playtimedown);
        settimeDown(value);
        setplay(false) };
    useEffect(() => { socket.emit('timeDown', timeDown);
        console.log(timeDown) }, [timeDown]);
  
    let giay = timeDown % 60;
    const phut = (timeDown - giay) / 60;
    if (play === true & timeDown > 0) var playtimedown = setTimeout(() => settimeDown(timeDown - 1), 1000);

    return (
        <div className="clock " id="toto">
            <SelectTime selectTime={selectTime}/>
            <div className="row">
                <div className="col-2 pr-0">
                    <div className="up_down_one">
                        <button type="button" className="btn btn-light cong_tru"   onClick={timeUpOne}>+1</button>
                        <button type="button" className="btn btn-light cong_tru"   onClick={timeDownOne}>-1</button>
                    </div>
                </div>
                <div className="col-10">
                <div className="control_time_down">{phut}:{(giay<10)?`0${giay}`:giay}</div>
                </div>
            </div>
            
            <button type="button" className="btn btn-light play_time_down"  onClick={isplay} >{(play===false)?"START":"STOP"}</button>

            


            

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(ControlClock);