import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const Select = (props) => {

    let selectTime = (e) => {props.selectTime(e.target.getAttribute('name')) };
    return (

      <div className="control_play">


                <button type="button" className="btn btn-light" onClick={selectTime} name={60} >1:00</button>
                <button type="button" className="btn btn-light" onClick={selectTime} name={90}>1:30</button>
                <button type="button" className="btn btn-light" onClick={selectTime} name={120}>2:00</button>
                <button type="button" className="btn btn-light" onClick={selectTime} name={180}>3:00</button>
            </div>
    )
}

export default Select;