import React from "react";
import "./styles.scss";
import HeaderForm from "./../../layouts/header/index";
import FooterForm from "./../../layouts/footer/index";
import ProfileForm from "./../../components/profile/index";
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
