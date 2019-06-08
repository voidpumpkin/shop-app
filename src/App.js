import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Browse from "./Browse";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Browse} />
      </Router>
    );
  }
}

export default App;
