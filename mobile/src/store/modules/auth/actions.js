export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, identifier, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, identifier, email, password },
  };
}

export function resetPassword(identifier, email) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: { identifier, email },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
