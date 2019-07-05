import React from 'react';
import Name from './Name';
import Score from './Score';
import NameC from './NameC';
import IconC from './IconC';
import DisplayShensu from './displayShensu';

const Boad = (props) => {
console.log('day11')
      

  let {main}=props;
  return (
    <div className={"col-6 table_"+main}> 
            <div className="row">
              <div className={"col-12 "+((main==="ao")?"text-right":"")}>
                <Name main={props.main}/>
                <Score main={props.main}/>
              </div>
            </div>
            <div className="row">
              <div className={"col-8 "+((main==="ao"?"order-2":""))}>
                <div className="all_name_c">
                  <NameC>C</NameC>
                  <NameC>K</NameC>
                  <NameC>HC</NameC>
                  <NameC>H</NameC>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-end">
                  
              </div>
            </div>
            <div className="row">
              <div className={"col-8 "+((main==="ao"?"order-2":""))}>
                <div className="all_icon_c">
                  <IconC main={main} type={"c"} c={"c1"}/>
                  <IconC main={main} type={"k"} c={"c1"}/>
                  <IconC main={main} type={"hc"} c={"c1"}/>
                  <IconC main={main} type={"h"} c={"c1"}/>
                </div>
              </div>
              <div className={"col-4 text-center "+((main==="ao")?"order-1":"")}>
                <div className="value_c ">C1</div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={"col-8 "+((main==="ao"?"order-2":""))}>
                <div className="all_icon_c">
                  <IconC main={main} type={"c"} c={"c2"}/>
                  <IconC main={main} type={"k"} c={"c2"}/>
                  <IconC main={main} type={"hc"} c={"c2"}/>
                  <IconC main={main} type={"h"} c={"c2"}/>
                </div>
              </div>
              <div className={"col-4 text-center "+((main==="ao")?"order-1":"")}>
                <div className="value_c ">C2</div>
              </div>
            </div>
            <DisplayShensu main={main}/>
          </div>

  )
}

export default Boad;