import React from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      
    <Router>
    <div class="home-3">
      <Navbar/>
      <Routes>
        <Route  path="/"         element={<Home/>}/>
        <Route  path="/quiz"         element={<Quiz/>}/>

        <Route  path="/dashboard"         element={<Dashboard/>}/>

        <Route  path="/login"         element={<Login/>}/>

        {/* <Route  path="/dashregion"                   element={<ProtectedRouteAdmin><DashAdmin/></ProtectedRouteAdmin>}/> */}
        
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  </Router>

  </div>
  );
}

export default App;