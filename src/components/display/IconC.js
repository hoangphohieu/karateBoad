import React, { useState } from 'react';
import { connect } from 'react-redux';

const IconC = (props) => {

    const { socket, main, type,c } = props;
    const [check, setCheck] = useState(false);
    let circle = '';
    (check === false) ? (circle = <div className="icon_c"></div>) :
    (circle = <div className="icon_c back_white" ></div>);
    socket.on('returnChangeCheck', value => {
		if(value.main===main & value.type===type& value.c===c) setCheck(value.check)
    });

    return ( <
        >


        { circle } <
        />
    )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(IconC);