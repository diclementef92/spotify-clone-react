import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<Artist />} />

          <Route path="/album/:id" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
