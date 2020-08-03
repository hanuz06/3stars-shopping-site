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
} from "../../utils/types";

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

      const signedupUser = await firestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          firstName: user.firstName,
          lastName: user.lastName,
          email: email,
        });

      const signedupUserData = signedupUser.data();

      sessionStorage.setItem("firstName", signedupUserData.firstName);

      dispatch({ type: SIGNUP_SUCCESS, loggedInUser: signedupUserData });
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
      const userData = await firestore
        .collection("users")
        .doc(res.user.uid)
        .get();

      const loggedInUser = userData.data();

      sessionStorage.setItem("firstName", loggedInUser.firstName);

      dispatch({ type: SIGNIN_SUCCESS, loggedInUser });
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
  sessionStorage.removeItem("firstName")
  dispatch({ type: SIGNOUT_SUCCESS });
};
