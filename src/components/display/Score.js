import React, { useState } from 'react';
import { connect } from 'react-redux';


const Score = (props) => {
    const { socket, main } = props;
    let [score, setScore] = useState(0);
    socket.on('returnchangeScore', value => { if (main === value.main) setScore(value.value) });
    return (
    <div className="display_score_shensu">
	    <div className="scrore">{score}</div>	    	    
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(Score);