import React from "react";
import "./styles.scss";
class FooterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <footer className="p-footer" >
        <p>© 2019 Terralogic, Inc</p>
        </footer>
      </div>
    );
  }
}

export default FooterForm;
