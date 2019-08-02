import React from "react";
import "./styles.scss";
import LoginFormLeft from "./../../components/login/login-left/index";
import LoginFormRightLogin from "./../../components/login/login-right-login/index";
import LoginFormRightSignUp from "../../components/login/login-right-sign-up/index";
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
        <div className="row left">
          <div className="column left">
            <div className="content-left">
              <div className="image-background">
                <img
                  src={require("./../../images/terralogic.png")}
                  className="picture-background"
                  alt="background"
                />
                <div className="title-background">We are family</div>
                <p>© 2019 Terralogic, Inc</p>
              </div>
            </div>
          </div>
          <div className="column left">
            <Route exact path="/" component={LoginFormRightLogin} />
            <Route path="/signup" component={LoginFormRightSignUp} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default LoginPage;
