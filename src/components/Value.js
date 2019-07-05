import React, { useState } from 'react';

function Value(){
    let [dataValue, setDataValue] = useState();
    let changeDataValue = (e) => { 
      localStorage.giatri=e.target.value
      setDataValue(localStorage.giatri) 
    }
        return (
            <div>
  <input type="text" onChange={changeDataValue} value={dataValue}/>
                
            </div>
        );
}

export default Value;