import React, { memo, useEffect } from "react";
import { useStyles } from "./style";
import PhoneCard from "../../components/PhoneCard";
import { setProductsList } from "../../store/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { IProduct } from "../../utils/types";
// import { NavLink } from "react-router-dom";
import { Typography } from "antd";
// import ProductDetailComponent from "./ProductDetailComponent";

const { Text, Link } = Typography;

const LandingPage: React.FC = (): JSX.Element => {
  // const [productsList, setProductsList] = useState([]);
  const classes = useStyles();
  useFirestoreConnect([{ collection: "phones" }, { collection: "headsets" }]);

  const dispatch = useDispatch();

  // Get product list from Firestore
  const products = useSelector<any, any>(
    (state) => state.firestore.ordered.phones
  );

  // Get product list from Redux
  const foundProducts = useSelector<any, any>(
    (state) => state.products.foundProducts
  );

  // Error message when search results nothing
  const errorMessage = useSelector<any, any>((state) => state.products.error);

  useEffect(() => {
    // dispatch(getProductsList());
    // console.log("PHONES ", products);
    // debugger;
    dispatch(setProductsList(products));
  }, [products]);

  useEffect(() => {
    dispatch(setProductsList([]));
  }, []);

  // Get product list locally
  // const productsList = useSelector<any, [IProductProduct<string, number>]>(
  //   (state: any) => state.products.products
  // );

  return (
    <section className={classes.cardContainer}>
      {errorMessage && (
        <span className={classes.searchAlert}>
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        </span>
      )}
      {foundProducts &&
        foundProducts.map((phone: any) => (
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
