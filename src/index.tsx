import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { Provider, useSelector } from "react-redux";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { store, rrfProps } from "./store/configureStore";

// Detects if authentication is loaded. In case a user has logged in it prevents Login/Register component flashing in the header. Instead, it waits for authentication is loaded then shows Logout component.
const AuthIsLoaded = ({ children }: any) => {
  const auth = useSelector((state: any) => state.firebase.auth);
  if (!isLoaded(auth)) return <div></div>;
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
