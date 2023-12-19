import React from "react";
import "./App.css";
import Topbar from "./components/topbar";
import Content from "./components/content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/map";
import LoginPage from "./components/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/map" element={<Map />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
