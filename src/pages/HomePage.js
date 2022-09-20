import React from "react";
import Offer from "../components/screens/offer/Offer";
import WhyMe from "../components/screens/why-me/WhyMe";
import Recomendations from "../components/screens/recomendations/Recomendations";
import { makeStyles } from "@material-ui/core";
import ContactForm from "../components/screens/contact/ContactForm";
import MainPage from "../components/screens/main/MainPage";

const useStyles = makeStyles({
  homepage: {
    minHeight: "100vh",
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "-10px",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepage}>
      <MainPage />
      <WhyMe />
      <Offer />
      <Recomendations />
      <ContactForm />
    </div>
  );
};

export default HomePage;
