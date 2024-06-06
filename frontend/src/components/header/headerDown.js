import React from "react";
import "./header.css";
import logo2 from '../../assets/logo2.jpeg';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.jpeg'
import dash from '../../assets/dash.png';

function First() {
   
    return (
        <>
            <div className="flex flex-outer">
                <div>
                    <div>
                        <img src={s2}></img>
                        <div className="img-1">
                            <p>Beyond fashion,</p>
                            <p>Beyond ordinary</p>
                            <button className="shop-b">SHOP NOW ➡️</button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button">
                                <img src={dash} className="dashimg"></img>
                                <div className="but"><button>➡️</button></div>
                            </div>
                        </div>
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button">
                                <img src={dash} className="dashimg"></img>
                                <div className="but"><button>➡️</button></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div >
                    <img className="h-img" src={s3}></img>
                    <div className="img-2">
                        <p>Every Stitch is a</p>
                        <p>a work of Heart</p>
                        <button className="shop-b">SHOP NOW ➡️</button>
                    </div>
                </div>
            </div>




            <div className="featured">Featured In</div>
            <hr></hr>
            <div className="flex flex-logo">
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
            </div>
            <hr></hr>
            </>
       
    );
}
export default First;