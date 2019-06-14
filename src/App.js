import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Browse from "./Browse/Browse";
import Item from "./Item/Item";
import NoMatch from "./SharedComponents/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Browse} />
        <Route path="/browse/" component={Browse} />
        <Route path="/item/:id" component={Item} />
        <Route component={NoMatch} />
      </Router>
    );
  }
}

export default App;
