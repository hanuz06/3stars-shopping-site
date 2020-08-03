import React, { memo, useEffect } from "react";
import { useStyles } from "./style";
import PhoneCard from "../../components/PhoneCard";
import { getProductsList } from "../../store/actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { NavLink } from "react-router-dom";

const LandingPage: React.FC = (): JSX.Element => {
  const classes = useStyles();
  useFirestoreConnect([{ collection: "phones" }, { collection: "headsets" }]);

  const dispatch = useDispatch();

  // Get product list from Firestore
  const productsList = useSelector<any, any>(
    (state) => state.firestore.ordered.phones
  );

  // console.log("PHONES ", productsList);

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  interface Products<T> {
    id: number;
    title: T;
    image: T;
    price: number;
    company: T;
    info: T;
  }

  // Get product list locally
  // const productsList = useSelector<any, [Products<string>]>(
  //   (state: any) => state.products.products
  // );

  return (
    <section className={classes.cardContainer}>      
      {productsList &&
        productsList.map((phone: any) => (
          <NavLink key={phone.id} to={`/details/${phone.id}`}>
            <PhoneCard
              id={phone.id}
              title={phone.title}
              image={phone.img}
              price={phone.price}
              company={phone.company}
              info={phone.info}
            />
          </NavLink>
        ))}
    </section>
  );
};

export default memo(LandingPage);
