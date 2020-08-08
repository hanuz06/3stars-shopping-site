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
  NewAccountParameters,
} from "../../utils/types";

// Signup action
export const signUp = ({ user, email, password }: NewAccountParameters) => {
  return async (
    dispatch: any,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: SIGNUP_START });

    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const currentUser = await firebase.auth().currentUser;

      // Add a display name to user's profile
      await currentUser.updateProfile({
        displayName: user.firstName,
      });

      // Send the verfication email
      // await currentUser.sendEmailVerification();

      await firestore.collection("users").doc(res.user.uid).set({
        firstName: user.firstName,
        lastName: user.lastName,
        email: email,
      });

      dispatch({
        type: SIGNUP_SUCCESS,
        loggedInUser: user.firstName,
      });
    } catch (err) {
      dispatch({ type: SIGNUP_FAIL, signupError: err.message });
    }
    dispatch({ type: SIGNUP_END });
  };
};

// Signin action
export const signIn = ({ email, password }: NewAccountParameters) => {
  return async (
    dispatch: any,
    getState: any,
    { getFirestore, getFirebase }: any
  ) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: SIGNIN_START });

    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch({ type: SIGNIN_SUCCESS, loggedInUser: res.displayName });
    } catch (err) {
      dispatch({ type: SIGNIN_FAIL, signinError: err.message });
    }
    dispatch({ type: SIGNIN_END });
  };
};

// Signout action
export const signOut = () => async (
  dispatch: any,
  getState: any,
  { getFirebase }: any
) => {
  const firebase = getFirebase();

  await firebase.auth().signOut();
  sessionStorage.removeItem("firstName");
  dispatch({ type: SIGNOUT_SUCCESS });
};
