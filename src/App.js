import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Browse from "./Browse/Browse";
import Item from "./Item/Item";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Browse} />
        <Route exact path="/item/:id" component={Item} />
      </Router>
    );
  }
}

export default App;
