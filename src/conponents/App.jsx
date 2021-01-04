import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Todo" component={Todo} />
        </div>
      </Router>
    </div>
  );
};

export default App;
