export enum UserActionTypes {
  LOADING = "loading",
  SUCCESS = "success",
}

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const SET_PRODUCTS_LIST = "SET_PRODUCTS_LIST";
export const GET_ORDERS = "GET_ORDERS";
export const SET_ORDER = "SET_ORDER";
export const CREATE_USER_ACCOUNT = "CREATE_USER_ACCOUNT";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const SIGNUP_END = "SIGNUP_END";

export const SIGNIN_START = "SIGNIN_START";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";
export const SIGNIN_END = "SIGNIN_END";

export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";

export interface IAuthState {
  loading: boolean;
  signupError: string | null;
  signinError: string | null;
  isLoggedIn: boolean;
  loggedInUser: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface ISignupSigninStartEnd {
  type:
    | typeof SIGNUP_START
    | typeof SIGNIN_START
    | typeof SIGNIN_END
    | typeof SIGNUP_END;
}

interface ISignupSigninSuccess {
  type: typeof SIGNUP_SUCCESS | typeof SIGNIN_SUCCESS;
  loggedInUser: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface ISignoutSuccess {
  type: typeof SIGNOUT_SUCCESS;
}

interface ISignupFail {
  type: typeof SIGNUP_FAIL;
  signupError: string;
}

interface ISigninFail {
  type: typeof SIGNIN_FAIL;
  signinError: string;
}

export type AuthActionsType =
  | ISignupSigninStartEnd
  | ISignupFail
  | ISigninFail
  | ISignoutSuccess
  | ISignupSigninSuccess;
