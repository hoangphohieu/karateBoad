import React,{useState} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const ShenShu = (props) => {
    const { socket, main } = props;
    const [isShenShu, setisShenShu] = useState(false);
    const changeShenShu=()=>{setisShenShu(!isShenShu)}
    socket.emit('ShenShu',{isShenShu:isShenShu,main:main});
    return (
        <Button variant="contained" onClick={changeShenShu} className={(isShenShu===true)?"control_shensu":""}>
        shensu
      </Button>
    )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}
export default connect(mapStateToProps, null)(ShenShu);