import React from "react";
import "./App.css";
import Topbar from "./components/topbar/topbar";
import Content from "./components/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/login";
import SignUp from "./components/login/signup";
import AddRoom from "./components/addRoom/addRoom";
import HotelRoom from "./components/hotel/hotelRoom";
import MapView from "./components/map/map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/addRoom" element={<AddRoom />} />
            <Route path="/hotel/:id" element={<HotelRoom />} />
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
