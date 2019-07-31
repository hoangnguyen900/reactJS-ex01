import React from "react";
import "./../styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../../../actions/index";
import Swal from "sweetalert2";

class LoginFormRightSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    var { password, confirmPassword } = this.state;
    if (confirmPassword !== password) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Password don't match!!"
      });
    } else {
      e.preventDefault();
      this.props.onSignUp(this.state);
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    var { email, password } = this.state;

    return (
      <div className="content-right">
        <form onSubmit={this.onSubmit} className="form-info1">
          <h1>Sign Up</h1>
          <div className="formField">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="formField">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={this.onChange}
            />
          </div>
          <div className="formField">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="Password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm your password"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />
          </div>
          <div className="formField">
            <button
              type="submit"
              id="btnlogin"
              name="btnlogin"
              className="btn-login"
            >
              CONFIRM
            </button>
            <Link to="/" className="link">
              I'm already member
            </Link>
          </div>
          <div className="title-background-hidden">
            <p>© 2019 Terralogic, Inc</p>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSignUp: state => {
      dispatch(actions.signUpAPI(state));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginFormRightSignUp);
