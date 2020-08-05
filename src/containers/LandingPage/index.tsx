import React, { memo, useState, useEffect } from "react";
import { useStyles } from "./style";
import PhoneCard from "../../components/PhoneCard";
// import { getProductsList } from "../../store/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { IProduct } from "../../utils/types";
// import { NavLink } from "react-router-dom";
// import { Modal, Button } from "antd";
// import ProductDetailComponent from "./ProductDetailComponent";

const LandingPage: React.FC = (): JSX.Element => {
  const [productsList, setProductsList] = useState([]);
  const classes = useStyles();
  useFirestoreConnect([{ collection: "phones" }, { collection: "headsets" }]);

  const dispatch = useDispatch();

  // Get product list from Firestore
  const products = useSelector<any, any>(
    (state) => state.firestore.ordered.phones
  );

  useEffect(() => {
    // dispatch(getProductsList());
    // console.log("PHONES ", products);
    // debugger;
    setProductsList(products);
  }, [products]);

  useEffect(() => {
    setProductsList([]);
  }, []); 

  // Get product list locally
  // const productsList = useSelector<any, [IProductProduct<string, number>]>(
  //   (state: any) => state.products.products
  // );

  return (
    <section className={classes.cardContainer}>
      {/* <ProductDetailComponent visible={visible} /> */}
      {productsList &&
        productsList.map((phone: any) => (
          <PhoneCard
            key={phone.id}
            id={phone.id}
            title={phone.title}
            image={phone.img}
            price={phone.price}
            company={phone.company}
            info={phone.info}
          />
        ))}
    </section>
  );
};

export default memo(LandingPage);
