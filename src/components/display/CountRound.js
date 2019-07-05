import React,{useState} from 'react';
import { connect } from 'react-redux';


const CountRound = (props) => {
    const {socket} = props;

    const [timeDown,settimeDown]=useState(0);
    socket.on('returnCountRound',value=>{settimeDown(value)});


  return (
    <div className="display_count_round">

    <div className="hienthi_tran">Trận số</div>
    <div className="display_show_round">{timeDown}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(CountRound);