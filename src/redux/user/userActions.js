import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILED,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILED 
} from '../constants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
})

export const googleSignInFailed = error => ({
  type: GOOGLE_SIGN_IN_FAILED,
  payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const emailSignInSuccess = user => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
})

export const emailSignInFailed = error => ({
  type: EMAIL_SIGN_IN_FAILED,
  payload: error
})