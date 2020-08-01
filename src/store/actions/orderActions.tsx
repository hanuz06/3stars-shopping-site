import { GET_ORDERS, SET_ORDER } from "../../utils/types";
import { phones } from "../../data/phones";

export const getOrders = () => {
  return async (
    dispatch: any,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    // const book = await getState().manga.bookDetails;

    // const newBook = {
    //   ...book,
    //   chapters: book.chapters.reverse(),
    // };

    dispatch({
      type: GET_ORDERS,
      products: phones,
    });
  };
};

export const setOrder = (order: any) => {
  return async (
    dispatch: any,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    const firestore = getFirebase();
    firestore
      .collection("orders/${UseID}")
      .add({
        ...order,
        userFirstName: "Jerry",
        userLastName: "Yang",
        userId: 12334,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: SET_ORDER, 
          products: phones,
        });
      })
      .catch((err: any) => {
        new Error(err);
      });
  };
};
