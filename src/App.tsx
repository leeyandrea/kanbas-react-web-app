import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from './Labs';

function App() {
  //simple function that evaluates to an image, 
  //acutal content beign rendered on screen
  //renders and image, hyperlink, and paragraph
  return (
    <div>
      <h1>
        Wlecome to Web Dev!
      </h1>
      <Labs />
    </div>
  );
}

export default App;
