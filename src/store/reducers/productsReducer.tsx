// import { phones } from "../../data/phones";
import {
  SET_PRODUCTS_LIST,
  FOUND_PRODUCTS_LIST,
  NOT_FOUND_PRODUCTS_LIST,
  ProductsActionsType,
} from "../../utils/types";

const initState: any = {
  products: [],
  foundProducts: [],
  error: "",
};

const productsReducer = (state = initState, action: ProductsActionsType) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload.products,
        foundProducts: action.payload.products,
        error: "",
      };
    case FOUND_PRODUCTS_LIST:
      return {
        ...state,
        foundProducts: action.payload.foundProducts,
        error: "",
      };
    case NOT_FOUND_PRODUCTS_LIST:
      return {
        ...state,
        foundProducts: action.payload.foundProducts,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
