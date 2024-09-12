import React from 'react';
import Labs from './Labs';
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


export default function App() {
  //simple function that evaluates to an image, 
  //acutal content beign rendered on screen
  //renders and image, hyperlink, and paragraph
  return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
    </div>
    </HashRouter>
    
  );
}
