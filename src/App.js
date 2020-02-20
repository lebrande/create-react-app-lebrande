import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Tools from "./components/Tools";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul className="App-menu">
              <li className="App-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="App-menu-item">
                <Link to="/tools">About</Link>
              </li>
              <li className="App-menu-item">
                <Link to="/profile">Dashboard</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/tools">
                <Tools />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
