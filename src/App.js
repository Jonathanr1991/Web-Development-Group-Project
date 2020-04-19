import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css"
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
       <Route path="/" component = {CreateUser}/>
      </div>

    </Router>
 
  );
}

export default App;
