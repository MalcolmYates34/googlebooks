import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import "./App.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={New} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
