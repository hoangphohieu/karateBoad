import React,{useState} from 'react';
import { connect } from 'react-redux';




const IconC = (props) => {

	const {socket,main,type,c}=props;
	const [check,setCheck]=useState(false);
	let changeCheck=()=>{setCheck(!check)}
	let circle='';
		(check===false)?(circle=<div className="icon_c" onClick={changeCheck}></div>):
			(circle=<div className="icon_c back_white" onClick={changeCheck}></div>);
    socket.emit('changeCheck', { type: type, main: main,check:check,c:c });
	
  return (
  	<>

    	
    	{circle}
	</>
  )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(IconC);