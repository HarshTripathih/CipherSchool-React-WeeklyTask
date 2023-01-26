import React, { Components } from "react";
import './Music.css';


export default function Music({ name, path, artist, cover }) {
    return (
        <div className="music_box_container">
            <div className="music_card">
                <div className="song_name">
                    <marquee direction="left"><h2 style={{color:'white'}}>{name}</h2></marquee>
                </div>
                <div className="cover_img">
                    <img src={cover} alt="loding error" />
                </div>
                <div className="song_player">
                    <audio controls>
                        <source src={path} type="audio/mpeg" />
                    </audio>
                </div>
                <div className="artist_name">
                    <h3 style={{color:'white'}}>Artist Name : &nbsp;{artist}</h3>
                </div>
            </div>
        </div>
    );
}