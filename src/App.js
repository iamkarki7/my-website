import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home'
import Skill from './pages/Skillset'
import Skill1 from './pages/Skillset1'

import Project from './pages/Projects'
import Resume from './pages/Resume'


import Contact from './pages/Contact'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//import Preloader from "./components/PreLoader"
//<Preloader load={load} />
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/skillset1" element={<Skill1 />} />

          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
