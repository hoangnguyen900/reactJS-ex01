import * as types from "./actionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export const login = state => {
  return {
    type: types.LOGIN,
    state
  };
};

export const loginAPI = state => {
  return dispatch => {
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/login",
      data: state
    })
      .then(res => {
        localStorage.setItem("token", res.data.token);

        console.log(res);
        dispatch(login(state));
      })
      .catch(er => {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong! Email or password must valid!!"
        });
      });
  };
};
export const signUp = state => {
  return {
    type: types.SIGNUP,
    state
  };
};
export const signUpAPI = state => {
  return dispatch => {
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/sign_up",
      data: state
    })
      .then(res => {
        console.log(res);
        dispatch(signUp(state));
        Swal.fire({
          position: 'top',
          type: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })

      })
      .catch(er => {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Email is already exist!!"
        });
      });
  };
};
export const showProfile = state => {
  return {
    type: types.SHOW_PROFILE,
    state
  };
};
export const showProfileAPI = () => {
  return dispatch => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/get_profile",
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log(res);
        dispatch(showProfile(res.data.data));
      })
      .catch(er => {});
  };
};
export const updateProfile = state => {
  return {
    type: types.UPDATE_PROFILE,
    state
  };
};
export const updateProfileAPI = state => {
  return dispatch => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/set_profile",
      headers: {
        "x-user-token": token
      },
      data: state
    })
      .then(res => {
        console.log(res);
        dispatch(updateProfile(res.data.data));
        Swal.fire({
          position: 'top',
          type: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(er => {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!!!"
        });
      });
  };
};
