import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
