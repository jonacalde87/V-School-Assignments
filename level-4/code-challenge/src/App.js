import React from "react";
import Profile from "./Profile";
import Home from "./Home";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Link> */}
      <Link to="/" style={{display:'flex', justifyContent: 'space-around'}}>Home</Link>
      <Link to="/profile" style={{display:'flex', justifyContent: 'space-around'}}>Profile</Link>

      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="profile" element= {<Profile />}/>
      </Routes>

      
    </div>
  );
}

export default App;

// Part 3:
// [] Use the React Router Dom library to split the
// Home and Profile components to their own pages.
// Render in the app component. Home should be rendered
// by default.
