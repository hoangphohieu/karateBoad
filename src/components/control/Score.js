import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



const Score = (props) => {
    const { socket, main } = props;
    let [score, setScore] = useState(0);
    let Yuko = () => { setScore(score + 1) };
    let Waza = () => { setScore(score + 2) };
    let Ippon = () => { setScore(score + 3) };
    let Down = () => { setScore(score - 1) };
    socket.emit('changeScore', { value: score, main: main });
    return (
        <div className="row">
        <div className="col-6">
          <div className="d-flex flex-column  display_up_score">
            <Button variant="contained" className="border-secondary" onClick={Yuko}>Yuko +1</Button>
            <Button variant="contained" className="border-success" onClick={Waza}>Waza-ari +2</Button>
            <Button variant="contained" className="border-primary" onClick={Ippon}>Ippon +3</Button>
            <Button variant="contained" className="border-danger" onClick={Down}>-1</Button>
          </div>
        </div>
        <div className="col-6">
          <p className="display_scrore">{score}</p>
        </div>

            
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(Score);