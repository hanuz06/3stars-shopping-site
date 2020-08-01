import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  order: orderReducer,
  firestore: firestoreReducer, 
});

export default rootReducer;
