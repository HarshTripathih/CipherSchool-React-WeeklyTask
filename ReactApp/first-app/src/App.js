import React from 'react';
import './App.css';
import App2 from './App2';
import Data from './components/MusicPage/Data';
import Userdetail from './components/User/Userdetail';


function App() {
  return (
    <div className="App">
     <App2 key={1}/>
     <Userdetail/>
     <Data/>
    </div>
  );
}

export default App;
