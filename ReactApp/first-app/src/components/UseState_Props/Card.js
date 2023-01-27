import React from "react";
import './Card.css';

const Card = ({ name = "", profile = "", body = "", userid = "", id = "", date = "", title = "" }) => {
    return (
        <div className="Card-box">

            <div className="left-part-postbox">
                <div className="image-box">
                    <img src={profile} alt="error" />
                </div>
            </div>
            <div className="right-part-postbox">
                <div className="row1-box">
                    <div className="row1-box-left">
                        <div className="Name-box"><p><b>{name} &nbsp;</b></p></div>
                        <div className="userid-box"><p>{userid}</p></div>
                        <div className="dot"><i className="fa fa-circle" aria-hidden="true"></i></div>
                        <div className="date-box"><p>{date}</p></div>
                    </div>
                    <div className="row1-box-right">
                        <div className="Three_dot">
                            <div className="Three_dot_circle">
                                <p><i className="fa fa-ellipsis-h" aria-hidden="true"></i></p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="title-box"><p><b>{title}</b></p></div>
                <div className="body-box"><p>{body}</p></div>
                <div className="post-icons">
                    <div className="message-icon"><p><i class="fa-regular fa-message"></i></p></div>
                    <div className="retweet-icon"><p><i class="fa-solid fa-retweet"></i></p></div>
                    <div className="like-icon"><p><i class="fa-regular fa-heart"></i></p></div>
                    <div className="impresion-icon"><p><i class="fa-sharp fa-solid fa-chart-simple"></i></p></div>
                    <div className="upload-icon"><p><i class="fa-solid fa-upload"></i></p></div>
                </div>
                 {/* <div className="id-box"><p>{id}</p></div> */}
            </div>


            {/* <h1>My Name is : {name}</h1>
            <input type="text" onChange = {(e)=> setState(e.target.value)} /> */}
        </div>
    );
}
export default Card;