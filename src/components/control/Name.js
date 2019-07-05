import React, { useState } from 'react';
import { connect } from 'react-redux';



const Name = (props) => {
    const {socket,main} = props;
    const [name, setName] = useState(main);
    let changeName = (e) => { setName(e.target.value); socket.emit('changeName',{value:e.target.value,main:main}) }


    return ( <
        input type = "text"
        className = "control_name"
        defaultValue = { name } onChange = { changeName }
        />

    )
}


const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(Name);