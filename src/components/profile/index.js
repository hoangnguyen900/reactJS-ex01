import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
import history from "../../history";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      display_info: "",
      phone: "",
      avatar: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    let {token}=this.props.login
    if (window.confirm("Are you sure you wish to update ?"))
      this.props.onUpdateProfile(this.state,token);

    // this.setState({
    //   checkLogin:this.props.login.checkLogin===true?true:false
    // })
    // console.log(this.state);
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  fileChangedHandler = event => {
    let {token}=this.props.login
    let fileReader = new FileReader();
    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]); // fileReader.result -> URL.
      fileReader.onload = progressEvent => {
        let url = fileReader.result;
        // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
        this.setState({ avatar: url });
        this.props.onUpdateProfile(this.state,token);
      };
    }
  };

  componentDidMount() {
    let token=localStorage.getItem('token')
    if (!token) history.push("/");
    else this.props.onShowProfile(token);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.profile);
    let { profile } = nextProps;
    this.setState({
      display_name: profile.display_name,
      display_info: profile.display_info,
      phone: profile.phone,
      avatar: profile.avatar
    });
  }
  render() {
    let { display_name, display_info, phone, avatar } = this.state;
    return (
      <div className="p-content">
        <form className="p-box" onSubmit={this.onSubmit}>
          <div className="row m-b-120 p-imgField">
            <img
              src={
                avatar !== ""
                  ? avatar
                  : require("../../images/nonUser.jpg")
              }
              className="p-picture-avatar rounded"
              alt="avatar"
            />
            <input
              style={{ display: "none" }}
              type="file"
              onChange={this.fileChangedHandler}
              ref={fileInput => (this.fileInput = fileInput)}
            />

            <i className="fa fa-cog	" onClick={() => this.fileInput.click()} />
          </div>
          <div className="row  ">
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Display Name</label>
                <input
                  type="text"
                  id="display_name"
                  name="display_name"
                  className="p-form-input"
                  value={display_name}
                  onChange={this.onChange}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Display Info</label>
                <input
                  type="text"
                  id="display_info"
                  name="display_info"
                  className="p-form-input"
                  value={display_info}
                  onChange={this.onChange}
                  placeholder="Your info"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-form-input"
                  value={this.props.login.email?this.props.login.email:localStorage.getItem('email')}
                  onChange={this.onChange}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="p-form-input"
                  value={phone}
                  onChange={this.onChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="p-form-input"
                  onChange={this.onChange}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-formField">
                <label>Confirm Password</label>
                <input
                  type="password"
                  id="confirm"
                  name="confirm"
                  className="p-form-input"
                  onChange={this.onChange}
                  placeholder="Confirm password"
                />
              </div>
            </div>
            {/*  */}
          </div>
          <div className="row ">
            <button className="p-btn-form-submit" type="submit">
              Update profile
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onShowProfile: (token) => {
      dispatch(actions.showProfileAPI(token));
    },
    onUpdateProfile: (state,token) => {
      dispatch(actions.updateProfileAPI(state,token));
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
)(ProfileForm);
