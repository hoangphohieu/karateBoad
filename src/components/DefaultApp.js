import React from 'react';
import { Link } from 'react-router-dom';
import Control from './../images/control.jpg';
import Display from './../images/display.jpg';
import Face from './../images/facebook.svg';


// <ul >
//             <li><Link to="">Trang chủ</Link></li>
//             <li><Link to="/trongtai">Trọng tài</Link></li>
//             <li><Link to="/manHinh">Màn hình</Link></li>
//         </ul>
const DefaultApp = (props) => {
    return (
        <div  >
    	
        <div className="container-fluid ">
            <div className="row justify-content-center mt-5 pt-5">
                <div className="col-4 ">
                   <Link to="/trongtai"> <img src={Control} alt=""  className="demo_home"/></Link>
                   <p className="title_demo">Giao diện 1 (màn hình điều khiển)</p>
                </div>
                <div className="col-4">
                    <Link to="/manHinh"><img src={Display} alt="" className="demo_home"/></Link>
                    <p className="title_demo">Giao diện 2 (màn hình hiển thị)</p>
                    
            </div>
            <div className="container">
        <div className="row">
            <div className="col-12">
                <h3 className="huongdan">Hướng dẫn sử dụng:</h3>
                <p className="content_huongdan">• Mở tab giao diện 1 để điều khiển tỷ số.</p>
                <p className="content_huongdan">• Mở tab giao diện 2 để hiển thị tỷ số, nhấn f11 để hiển thị full màn hình.</p>
                <p className="content_huongdan">• Nếu dùng offline thì chạy server nodejs với câu lệnh " node index.js ".</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <a href="https://www.facebook.com/july.hph" className="content_tacgia">July Hoang</a>
            </div>
        </div>
    </div>
        </div>
        <div className="icon_home">
   			 <a href="https://www.facebook.com/july.hph"><img src={Face} alt="" className="icon_link"/></a>
    	</div>
    </div>
    </div>
    )
}

export default DefaultApp;