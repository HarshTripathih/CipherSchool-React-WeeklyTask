import React, { Component } from "react";

// const App2 = () =>{
//     return(
//         <>
//         <div className="navbar">
//             <h1 style={{color:'red',textAlign:'center',backgroundColor:'pink'}}>My Name is Harsh</h1>
//         </div>

//         </>
//     );

// }

class App2 extends Component {
    state = {isloggedin : false};

    render() {     // takes more space
        return (
            <>
                <div className="navbar">
                    {!this.state.isloggedin? (<h1>You are not logged in !</h1>):( <h1>Congratulation ! You are logged in</h1>)}
                    <button onClick={(e) => this.setState({ isloggedin: true})}>Login</button>
                </div>
            </>
        );
    }
}

export default App2;