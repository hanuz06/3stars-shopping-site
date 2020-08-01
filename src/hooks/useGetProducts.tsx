import { useEffect, useState } from "react";
import firebase from "../lib/fbConfig";

const useGetProducts = () => {
  const [productList, setProductList] = useState<any>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const productList = snapshot.docs.map((doc:any) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductList(productList);
      });
  }, []);

  return productList;
};

export default useGetProducts;
