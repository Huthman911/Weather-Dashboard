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
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
      </div>
    </Router>
    </div>
    </>
  )
}

export default App
