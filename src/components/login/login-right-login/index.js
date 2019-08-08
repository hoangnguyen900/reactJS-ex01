import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../../actions/index";
import history from '../../../history';

class LoginFormRightLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checkLogin: false,
      token:'',
      isLoading:false
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading:true
    })
    console.log(this.state);
    this.props.onLogin(this.state);

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
  componentWillReceiveProps(nextProps) {
        this.setState({
          checkLogin:nextProps.login.checkLogin,
          token:nextProps.login.token,
          isLoading:nextProps.login.isLoading
        })
        console.log(nextProps)
  }
  render() {
    let { email, password,isLoading } = this.state;
    if (this.state.checkLogin||localStorage.getItem('token')) {
      // return <Redirect to="/profile" data={this.state}/>;
      history.push('/profile')
    }

    return (
      <div className="content-right">
        <form onSubmit={this.onSubmit} className="form-info">
          <h1>LOGIN</h1>
          <div className="formField">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
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
            
            <button type="submit" className="btn-login">
            <div className={isLoading?"fa fa-spinner fa-spin":""}></div> LOGIN
            </button>
            <Link to="/signup" className="link">
              Create an account
            </Link>
            <div className="title-background-hidden">
              <p>© 2019 Terralogic, Inc</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogin: state => {
      dispatch(actions.loginAPI(state));
    }
  };
};
const mapStateToProps = state => {
  return {
    login: state.login
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormRightLogin);
