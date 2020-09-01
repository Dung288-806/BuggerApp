import * as ActionType from "../Actions/ActionType";


export const authStart = () => {
  return {
    type: ActionType.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: ActionType.AUTH_FAILED,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
  };
};