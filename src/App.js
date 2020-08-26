import React from 'react';
import logo from './Ferrari-Logo.jpg';
import './App.css';
import Ferrari from './Ferrari'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <a
          className="App-link"
          href="https://www.ferrari.com/en-US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about more Cherry Red Ferrari
        </a>
      </header>
      <Ferrari />
    </div>
  );
}

export default App;
