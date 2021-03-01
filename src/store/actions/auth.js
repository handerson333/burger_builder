import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
}
export const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: data
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}
export const auth = (email, password, isSignUp) => {
  return dispatch => {
    //auth user
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB24EVX_dfl7UmWSyDisn-EidGs0ULBfAg';
    if (!isSignUp) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB24EVX_dfl7UmWSyDisn-EidGs0ULBfAg';
    }
    axios.post(url, authData)
      .then(response => {

        console.log(response);
        dispatch(authSuccess(response.data));
      }
      )
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      })
  }
}