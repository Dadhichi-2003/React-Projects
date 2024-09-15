import React from "react";
import { Routes, Route } from "react-router-dom";
import Top from "./Top";
import Sport from "./Sport";

import Space from "./Space";
import About from "./About";

const Rounting = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/sports" element={<Sport />} />
      
      <Route path="/space" element={<Space />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Rounting;
