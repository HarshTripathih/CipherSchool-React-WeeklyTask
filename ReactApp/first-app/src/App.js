import React from 'react';
import './App.css';
import App2 from './App2';
import Data from './components/MusicPage/Data';
import Userdetail from './components/User/Userdetail';
import CardList from './components/UseState_Props/CardList';


function App() {
  return (
    <div className="App">
     <App2 key={1}/>
     <Userdetail/>
     <Data/>
     <CardList/>
    </div>
  );
}

export default App;
