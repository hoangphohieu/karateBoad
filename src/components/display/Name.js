import React, { useState } from 'react';
import {connect} from 'react-redux';

const Name = (props) => {
    const { socket, main } = props;
    const [name, setName] = useState(main);
    socket.on('returnChangeName', value => {if(main===value.main) setName(value.value) })
    return (
        <p className="name">{(name!=='')?name:main}</p>
    )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(Name);