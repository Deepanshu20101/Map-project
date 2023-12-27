import React from "react";
import "./App.css";
import Topbar from "./components/topbar/topbar";
import Content from "./components/home/content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/map/map";
import LoginPage from "./components/login/login";
import SignUp from "./components/login/signup";
import AddRoom from "./components/addRoom/addRoom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/map" element={<Map />} />
            <Route path="/addRoom" element={<AddRoom />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
