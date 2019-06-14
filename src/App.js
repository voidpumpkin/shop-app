import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Browse from "./Browse/Browse";
import Item from "./Item/Item";
import NoMatch from "./SharedComponents/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/browse" />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/item/:id" component={Item} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
