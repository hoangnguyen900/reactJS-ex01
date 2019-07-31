import React from "react";
import "./../styles.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  confirmLogout = () => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.web.app/api/logout",
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log('Logout',res)
        localStorage.clear();

      })
      .catch(er => {});
  };

  render() {
    return (
      <div className="row">
        <div className="p-header">
          <div className="col-sm-3">
            <img
              src={require("./../../../../images/terralogic.png")}
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

export default HeaderForm;
