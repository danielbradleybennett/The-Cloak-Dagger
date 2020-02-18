import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tavern from "./components/Tavern";
import { BrowserRouter as Router } from "react-router-dom"



ReactDOM.render(
  <Router>
    <Tavern />
  </Router>
    , document.getElementById('root'));


