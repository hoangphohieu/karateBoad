import React from 'react';
import Boad from './control/Boad';
import LinkIcon from './link';

function TrongTai(Socket) {


    return (
        <div className="container-fluid">
	        <div className="row">	
		       	 <Boad main={'ak'}/>														
		       	 <Boad main={'ao'}/>
		       	 <LinkIcon/>
			</div>			
		</div>
    );
}

export default TrongTai;