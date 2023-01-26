import React from "react";
import User from "./User";

export default function Userdetail(){
    const alluser = [
        {
            name : 'Harsh',
            email : 'harshtripathih321@gmail.com',
            phone : '1238546821'
        },
        {
            name : 'Siddharth',
            email : 'harshtripathih321@gmail.com',
            phone : '1238546821'
        },
        {
            name : 'Jalaj',
            email : 'harshtripathih321@gmail.com',
            phone : '1238546821'
        },
    ];
    let array = alluser.map((user,index)=>(
        <User key={index} user={user}/>
    ));
    return(
        <div>
            {/* <User user = {alluser[0]}/>
            <User user = {alluser[1]}/>
            <User user = {alluser[2]}/> */}
           {array}
        </div>
    );
}