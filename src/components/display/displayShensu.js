import React, { useState } from 'react';
import { connect } from 'react-redux';


const DisplayShensu = (props) => {
    const { socket, main } = props;
    let [showShenShu, setshowShenShu] = useState(false);
    socket.on('returnShenShu', value => { if (main === value.main) setshowShenShu(value.isShenShu) });
    return (<div>
	    {(showShenShu===true)?(<div className={"display_shenshu_"+main}>SHENSHU</div>):""}
 
            </div>

    )
}

const mapStateToProps = (state) => {
    return {
        socket: state
    };
}

export default connect(mapStateToProps, null)(DisplayShensu);