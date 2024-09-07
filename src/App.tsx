import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from './Labs';

function App() {
  //simple function that evaluates to an image, 
  //acutal content beign rendered on screen
  //renders and image, hyperlink, and paragraph
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Web Dev!</h1>
        <Labs />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        Welcome to Web Dev!
      </header>
    </div>
  );
}

export default App;
