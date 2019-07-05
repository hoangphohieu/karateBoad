import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


const SttTran = (props) => {
        const { socket } = props;
        const [timeDown, settimeDown] = useState(1);

        const timeUpOne = () => { settimeDown(timeDown + 1) };
        const timeDownOne = () => { settimeDown(timeDown - 1) };

        useEffect(() => {socket.emit('countRound', timeDown)})


                    return (
                        <div className="clock " id="toto">
                            <div className="row justify-content-center mt-5">
                                <div className="col-8 mt-2">
                                    <div className="control_time_down">{timeDown}
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-light dem_tran_dau"   onClick={timeUpOne}>+1</button>
                                        <button type="button" className="btn btn-light dem_tran_dau"   onClick={timeDownOne}>-1</button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    )
                }

                const mapStateToProps = (state) => {
                    return {
                        socket: state
                    };
                }

                export default connect(mapStateToProps, null)(SttTran);