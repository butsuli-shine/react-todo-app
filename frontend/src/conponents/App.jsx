import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Todo from "./Todo";
import Calendar from "./Calendar";
import Translator from "./Transrator"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Todo" component={Todo} />
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/Translater" component={Translator}/>
        </div>
      </Router>
    </div>
  );
};

export default App;
