import React from "react";
import "./styles.scss";
import HeaderForm from "./forms/HeaderForm";
import FooterForm from "./forms/FooterForm";
import ProfileForm from "./forms/ProfileForm";
import { BrowserRouter } from "react-router-dom";
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderForm />
        <ProfileForm />
        <FooterForm />
      </div>
    );
  }
}

export default ProfilePage;
