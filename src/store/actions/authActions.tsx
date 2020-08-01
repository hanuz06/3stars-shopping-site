import {
  SIGNIN_START,
  SIGNIN_END,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_END,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,SIGNOUT_SUCCESS
} from "../../utils/types";
// import firebase from "firebase/app";
import { ConsoleSqlOutlined } from "@ant-design/icons";

interface NewAccountParameters {
  user: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
}

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

      // Send the verfication email
      // const currentUser = firebase.auth().currentUser;
      // await currentUser.sendEmailVerification();

      await firestore.collection("users").doc(res.user.uid).set({
        firstName: user.firstName,
        lastName: user.lastName,
        email: email,
      });

      console.log("SIGNUP SUCCESS: ", res.user);
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (err) {
      console.log("SIGNUP FAILED: ", err.message);
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    }
    dispatch({ type: SIGNIN_END });
  };
};

export const signIn = ({ email, password }: NewAccountParameters) => {
  return async (dispatch: any, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();
    dispatch({ type: SIGNIN_START });
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // console.log("SIGNIN SUCCESS WITH TOKEN ", res.user.l);
      sessionStorage.setItem("userToken", res.user.l);
      dispatch({ type: SIGNIN_SUCCESS });
    } catch (err) {
      console.log("SIGNIN FAILED ", err.message);
      console.log("SIGNIN FAILED ", email);
      console.log("SIGNIN FAILED ", password);
      dispatch({ type: SIGNIN_FAIL, payload: err.message });
    }
    dispatch({ type: SIGNIN_END });
  };
};

// Logout action creator
export const signOut = () => async (
  dispatch: any,
  getState: any,
  { getFirebase }: any
) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    sessionStorage.removeItem("userToken")
    console.log("SIGNOUT SUCCESS");
    dispatch({ type: SIGNOUT_SUCCESS });
  } catch (err) {
    console.log(err.message);
  }
};
