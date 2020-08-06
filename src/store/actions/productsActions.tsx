import {
  GET_PRODUCTS_LIST,
  SET_PRODUCTS_LIST,
  FOUND_PRODUCTS_LIST,
  NOT_FOUND_PRODUCTS_LIST,
  IProduct,
} from "../../utils/types";
import { phones } from "../../data/phones.js";

export const setProductsList = (products: IProduct<string, number>[]) => {
  return async (dispatch: any, getState: any) => {
    // Initial setting of general product list.
    dispatch({
      type: SET_PRODUCTS_LIST,
      payload: { products },
    });

    // Initial setting with full product list. foundProducts list will change during product search process(when searchQuery is triggered)
    dispatch({
      type: FOUND_PRODUCTS_LIST,
      payload: { foundProducts: products },
    });
  };
};

export const searchQuery = (query: string) => {
  return async (dispatch: any, getState: any) => {
    const productsList = getState().products.products;

    const foundProducts = productsList.filter(
      (product: IProduct<string, number>) =>
        product.title.trim().toLowerCase().includes(query.trim().toLowerCase())
    );

    if (foundProducts.length > 0) {
      dispatch({
        type: FOUND_PRODUCTS_LIST,
        payload: { foundProducts },
      });
    } else {
      dispatch({
        type: NOT_FOUND_PRODUCTS_LIST,
        payload: { foundProducts: productsList, error: "Sorry, nothing found" },
      });
    }
  };
};
