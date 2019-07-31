import * as types from "../actions/actionTypes";

var initialState = {
  email: "",
  password: "",
  checkLogin: false,
  token: ""
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      state.email = action.state.email;
      state.password = action.state.password;
      state.checkLogin = true;
      state.token = action.state.token;
      return {
        ...state
      };
    case types.SIGNUP:
        return {
          ...state
        };
    default:
      return state;
  }
};
export default myReducer;
