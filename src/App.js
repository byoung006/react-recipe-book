import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const person = {name:'bryce'}
  const person2 = {name:'12312312312'}
  const family = [person, person2];


  function Imafunction() {

    return family.map(index => {
      return <div>{index.name}</div>
    })

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Imafunction/>
        </p>

      </header>
    </div>
  );
}

export default App;
