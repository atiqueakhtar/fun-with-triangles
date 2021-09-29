import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Area from "./components/Area";
import Istriangle from "./components/Istriangle";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/">
                  Quiz
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/istriangle">
                  Is Triangle
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/hypotenuse">
                  Hypotenuse
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-list-link" to="/area">
                  Area of Triangle
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/istriangle">
              <Istriangle />
            </Route>
            <Route path="/hypotenuse">
              <Hypotenuse />
            </Route>
            <Route path="/area">
              <Area />
            </Route>
            <Route path="/">
              <Quiz />
            </Route>
          </Switch>
        </div>
      </Router>
     </div>
  );
}

export default App;
