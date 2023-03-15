import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="favorites" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

