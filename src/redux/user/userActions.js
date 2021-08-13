import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  CHECK_USER_SESSION
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