import React from 'react';
import './App.css';
import Chrono from './Chrono';


const ms = 36526


function App() {
  return (
    <div className='card'>
      <header>
        <Chrono millliseconds = {ms}/>
      </header>
      
    </div>
  );
}

export default App;
