import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import WeatherDetails from "./components/WeatherDetails";
import './App.css'

function App() {
  
  
  return (
    <>

    
    
<div>

      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
