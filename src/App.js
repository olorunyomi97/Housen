import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
// import Card from "./components/layout/Card";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import './App.css';

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">
                  <Navbar />
                  <Route exact path="/" component={ Landing } />
                  <div className="container">
                      <Route exact path="/register" component={ Register } />
                      <Route exact path="/Login" component={ Login } />
                    </div>
                  {/* <Card/> */}
                  <Footer />
              </div>
          </Router>
      );
  }
}

export default App;