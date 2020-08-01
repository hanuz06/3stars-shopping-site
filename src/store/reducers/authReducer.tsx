import {
  SIGNIN_START,
  SIGNIN_END,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_END,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
  IAuthState,
  AuthActionsType,
} from "../../utils/types";

const initState: IAuthState = {
  loading: false,
  signinError: null,
  signupError: null,
  isLoggedIn: false,
};

const authReducer = (state = initState, action: AuthActionsType) => {
  switch (action.type) {
    case SIGNUP_START:
    case SIGNIN_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case SIGNUP_END:
    case SIGNIN_END: {
      return {
        ...state,
        loading: false,
      };
    }
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        authError: null,
        isLoggedIn: true,
      };
    }
    case SIGNOUT_SUCCESS: {
      return {
        ...state,
        authError: null,
        isLoggedIn: false,
      };
    }
    case SIGNUP_FAIL:    
      return {
        ...state,
        signupError: action.signupError,
      };  
    case SIGNIN_FAIL:
      return {
        ...state,
        signinError: action.signinError,
      };
    default:
      return state;
  }
};

export default authReducer;
