import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Artist from "./components/Artist";
import Home from "./components/Home";
import AlbumPage from "./components/AlbumPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<Artist />} />

          <Route path="/album/:id" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
