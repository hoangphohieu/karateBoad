import React,{useState} from 'react';
import { connect } from 'react-redux';


const ScoreDown = (props) => {
    const {socket} = props;

    const [timeDown,settimeDown]=useState(0);
    socket.on('returnTimeDown',value=>{settimeDown(value)});


    let  giay=timeDown%60;
    const phut= (timeDown-giay)/60;
  return (
    <div className="display_score">
    <div className="display_time_down">
	    		{phut}:{(giay<10)?`0${giay}`:giay}
		    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(ScoreDown);