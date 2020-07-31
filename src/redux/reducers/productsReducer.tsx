// import { phones } from "../../data/phones";
import { GET_PRODUCTS_LIST } from "../../utils/types";

const initState: any = {
  products: [],
};

const productsReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
