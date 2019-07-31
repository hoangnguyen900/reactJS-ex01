import React from "react";
import LoginPage from "./components/pages/Login/LoginPage";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import history from './history';

import ProfilePage from "./components/pages/profile/ProfilePage";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router  history={history} >
        <Route exact path="/" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
      </Router>
    );
  }
}

export default connect(
  null,
  null
)(App);
