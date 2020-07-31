import { GET_PRODUCTS_LIST, SET_PRODUCTS_LIST } from "../../utils/types";
import { phones } from "../../data/phones";


export const getProductsList = () => {
  return async (dispatch: any, getState: any) => {
    // const book = await getState().manga.bookDetails;

    // const newBook = {
    //   ...book,
    //   chapters: book.chapters.reverse(),
    // };

    dispatch({
      type: GET_PRODUCTS_LIST ,
      products: phones,
    });
  };
};

// export const setProductsList = () => {
//   return async (dispatch: any, getState: any) => {
    
//     dispatch({
//       type: SET_PRODUCTS_LIST ,
//       products: phones,
//     });
//   };
// };

