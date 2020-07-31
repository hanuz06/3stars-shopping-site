import { createStore, combineReducers, applyMiddleware } from "redux";
import orderReducer from "./orderReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  order: orderReducer,
});

export default rootReducer;
 