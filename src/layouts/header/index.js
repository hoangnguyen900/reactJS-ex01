import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class HeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  confirmLogout = () => {
    localStorage.clear();

    this.props.onLogout(this.props.login.token);
  };

  render() {
    return (
      <div className="row">
        <div className="p-header">
          <div className="col-sm-3">
            <img
              src={require("./../../images/terralogic.png")}
              className="p-picture-background"
              alt="img"
            />
          </div>
          <div className="col-sm-1 pull-right">
            <span className="dropdown-toggle p-link" data-toggle="dropdown">
              PROFILE
            </span>
            <ul className="dropdown-menu listItem">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/" onClick={this.confirmLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogout: (token) => {
      dispatch(actions.userLogoutAPI(token));
    }
  };
};
const mapStateToProps = state => {
  return {
    login:state.login,
    profile: state.profile
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderForm);


