import React from "react";
import LoginPage from "./pages/login/index";
import ProfilePage from "./pages/profile/index";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import history from './history';

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
