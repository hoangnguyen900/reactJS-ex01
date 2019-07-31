import React from "react";
import "./../styles.scss";

class LoginFormLeft extends React.Component {
  render() {
    return (
      <div className="content-left">
        <div className="image-background">
          <img
            src={require("./../../../../images/terralogic.png")}
            className="picture-background"
            alt="background"
          />
          <div className="title-background">We are family</div>
          <p>© 2019 Terralogic, Inc</p>
        </div>
      </div>
    );
  }
}

export default LoginFormLeft;
