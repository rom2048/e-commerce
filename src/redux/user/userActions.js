import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED
} from '../constants';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailed = error => ({
  type: SIGN_IN_FAILED,
  payload: error
})

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const signOutFailed = error => ({
  type: SIGN_OUT_FAILED,
  payload: error
})

export const signUpStart = (userCredentials) => ({
  type: SIGN_UP_START,
  payload: userCredentials
})

export const signUpSuccess = ({ user, additionalData}) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
})

export const signUpFailed = error => ({
  type: SIGN_UP_FAILED,
  payload: error
})