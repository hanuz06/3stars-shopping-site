import React from "react";
import { useStyles } from "./style";
import PhoneCard from "../../components/PhoneCard";
import { phones } from "../../data/phones";

const LandingPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      {phones.map((phone: any) => (
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
    </div>
  );
};

export default LandingPage;
