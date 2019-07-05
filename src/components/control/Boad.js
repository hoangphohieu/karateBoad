import React from 'react';
import Name from './Name';
import Score from './Score';
import NameC from './NameC';
import IconC from './IconC';
import ControlClock from './controlClock';
import SttTran from './sttTran';
import ShenShu from './ShenShu';

const Boad = (props) => {

    const { main } = props;
    return (
        <div className={"col-6 tab_"+ main}>  
            <div className="row">
              <div className="col-12">
                <Name main={main}/>
                </div>
                <div className="col-12 over_hidden">
                  <div className="row">
                    <div className="col-7">
                      <Score main={props.main}/>
                    </div>
                    <div className="col-5 ">
                      {(main==="ak")?<ControlClock/>:<SttTran/>}
                    </div>

                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="all_name_c">
                  <NameC>C</NameC>
                  <NameC>K</NameC>
                  <NameC>HC</NameC>
                  <NameC>H</NameC>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-start align-items-center" >
                <ShenShu main={main}/>
              </div>
            </div>
            <div className="row">
              <div className="col-8 ">
                <div className="all_icon_c">
                  <IconC main={main} type={"c"} c={"c1"}/>
                  <IconC main={main} type={"k"} c={"c1"}/>
                  <IconC main={main} type={"hc"} c={"c1"}/>
                  <IconC main={main} type={"h"} c={"c1"}/>
                </div>
              </div>
              <div className="col-4 ">
                <div className="value_c ">C1</div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-8 ">
                <div className="all_icon_c">
                  <IconC main={main} type={"c"} c={"c2"}/>
                  <IconC main={main} type={"k"} c={"c2"}/>
                  <IconC main={main} type={"hc"} c={"c2"}/>
                  <IconC main={main} type={"h"} c={"c2"}/>
                </div>
              </div>
              <div className="col-4 ">
                <div className="value_c ">C2</div>
              </div>
            </div>
          </div>

    )
}

export default Boad;