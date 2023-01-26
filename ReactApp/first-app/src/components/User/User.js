import React from "react";

function User({user = {} }){
    return(
        <div>
            <h1>Name : {user.name}</h1>
            <h3>Email : {user.email}</h3>
            <h3>PhoneNo. : {user.phone}</h3>
        </div>
    );

}
export default User;
