import React, { Component } from "react";
import Music from "./Music";
import './Data.css'
import manmerijan from '../../components/MusicPage/MusicImg/manmerijan.jpeg';
import dhokha from '../../components/MusicPage/MusicImg/dhokha.jpeg';
import dilgalti from '../../components/MusicPage/MusicImg/dilgalti.jpeg';
import kesariya from '../../components/MusicPage/MusicImg/kesariya.jpeg'; 
import meradil from '../../components/MusicPage/MusicImg/meradil.jpeg';
import merijindagi from '../../components/MusicPage/MusicImg/merijindagi.jpeg';
import nolove from '../../components/MusicPage/MusicImg/nolove.jpeg';
import pathan from '../../components/MusicPage/MusicImg/pathan.jpeg';
import ratanlambiya from '../../components/MusicPage/MusicImg/ratanlambiya.jpeg';
import shiv from '../../components/MusicPage/MusicImg/shiv.jpeg';
import terapyar from '../../components/MusicPage/MusicImg/terapyar.jpeg';
import tumsepyara from '../../components/MusicPage/MusicImg/tumsepyara.jpeg';

import dhokhasong from '../../components/MusicPage/Songs/dhokhasong.mp3';
import dilgaltisong from '../../components/MusicPage/Songs/dilgaltisong.mp3';
import kesariyasong from '../../components/MusicPage/Songs/kesariyasong.mp3'; 
import meradilsong from '../../components/MusicPage/Songs/meradilsong.mp3';
import merijindagisong from '../../components/MusicPage/Songs/merijindagisong.mp3';
import nolovesong from '../../components/MusicPage/Songs/nolovesong.mp3';
import pathansong from '../../components/MusicPage/Songs/pathansong.mp3';
import rattanlambiyasong from '../../components/MusicPage/Songs/rattanlambiyasong.mp3';
import shivsong from '../../components/MusicPage/Songs/shivsong.mp3';
import terapyarsong from '../../components/MusicPage/Songs/terapyarsong.mp3';
import tumsepyarsong from '../../components/MusicPage/Songs/tumsepyarsong.mp3';
import manmerijansong from '../../components/MusicPage/Songs/manmerijansong.mp3';



export default function Data() {
    const musicdata = [
        {
            name: 'Man Meri Jaan',
            path: manmerijansong,
            artist: 'King',
            cover: manmerijan
        },
        {
            name: 'Tera Nam Dhokha',
            path: dhokhasong,
            artist: 'King',
            cover: dhokha
        },
        {
            name: 'Dil Galti kar Baitha',
            path: dilgaltisong,
            artist: 'King',
            cover: dilgalti
        },
        {
            name: 'Kesariya Tera Ishq',
            path: kesariyasong,
            artist: 'King',
            cover: kesariya
        },
        {
            name: 'Tera Pyaar',
            path: terapyarsong,
            artist: 'King',
            cover: terapyar
        },
        {
            name: 'Tumse Pyara',
            path: tumsepyarsong,
            artist: 'King',
            cover: tumsepyara
        },
        {
            name: 'Mera dil',
            path: meradilsong,
            artist: 'King',
            cover: meradil
        },
        {
            name: 'Meri Jindagi',
            path: merijindagisong,
            artist: 'King',
            cover: merijindagi
        },
        {
            name: 'Pathan',
            path: pathansong,
            artist: 'King',
            cover: pathan
        },
        {
            name: 'Rattan Lambiya',
            path: rattanlambiyasong,
            artist: 'King',
            cover: ratanlambiya
        },
        {
            name: 'Shiv Shambhu Mahadeva',
            path: shivsong,
            artist: 'King',
            cover: shiv
        },
        // +6 more
    ]
    return (
        <div className="music-data">

            <b><h1 style={{color:'whitesmoke',fontSize:'50px',textShadow:'2px 2px 2px 2px blue'}}>Music Gallary</h1></b>
            
            <div className="music-box">
                {musicdata.map((value, index) => (
                    <Music
                        name={value.name}
                        path={value.path}
                        artist={value.artist}
                        cover={value.cover}
                    />
                ))}
            </div>
        </div>
    );
}