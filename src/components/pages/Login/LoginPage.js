import React from "react";
import "./styles.scss";
import LoginFormLeft from "./forms/LoginFormLeft";
import LoginFormRightLogin from "./forms/LoginFormRightLogin";
import LoginFormRightSignUp from "./forms/LoginFormRightSignUp";
import { BrowserRouter, Route } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="column">
            <div className="content-left">
              <div className="image-background">
                <img
                  src={require("./../../../images/terralogic.png")}
                  className="picture-background"
                  alt="background"
                />
                <div className="title-background">We are family</div>
                <p>© 2019 Terralogic, Inc</p>
              </div>
            </div>
          </div>
          <div className="column">
            <Route exact path="/" component={LoginFormRightLogin} />
            <Route path="/signup" component={LoginFormRightSignUp} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default LoginPage;
