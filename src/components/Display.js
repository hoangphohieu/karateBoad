import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TrongTai from './TrongTai';
import ManHinh from './manHinh';
import DefaultApp from './DefaultApp';

function Display(Socket) {
	
    return ( <div >
    	
        <Switch >
        <Route exact path = "/"render={ (props)=> <DefaultApp {...props} /> }/> 
        <Route exact path = "/trongtai"render={ (props)=> <TrongTai {...props} /> }/> 
        <Route exact path = "/manhinh" render={ (props)=> <ManHinh {...props} /> }/> 
        </Switch> 
        </div>
    );
}

export default Display;