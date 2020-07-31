import React, { memo, useEffect } from "react";
import { useStyles } from "./style";
import PhoneCard from "../../components/PhoneCard";
import { phones } from "../../data/phones";
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../redux/actions/productsActions";
import { getProductsList } from "../../redux/actions/productsActions";

const LandingPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const dispatch = useDispatch();

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

  const productsList = useSelector<any, [Products<string>]>(
    (state: any) => state.products.products
  );

  return (
    <section className={classes.cardContainer}>
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
