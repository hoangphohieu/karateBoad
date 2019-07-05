import React from 'react';
import Boad from './display/Boad';
import ScoreDown from './display/ScoreDown';
import CountRound from './display/CountRound';

function ManHinh(Socket) {


    return ( <
        div className = "container-fluid" >
        <
        div className = "row" >
        <
        Boad main = { 'ak' }
        />							 <
        Boad main = { 'ao' }
        /> <
        ScoreDown / >
        <
        CountRound / >
        <
        /div>			 <
        /div>
    );
}

export default ManHinh;