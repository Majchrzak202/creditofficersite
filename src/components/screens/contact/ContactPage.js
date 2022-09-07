import React from "react";
import ContactForm from "./ContactForm";
import ContactImg from "./../../../assets/ContactPhoto.jpeg";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "400px",
    height: "599px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    transition: "all .3s ease-in",
    "&:hover": {
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    },
  },
});


const ContactPage = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "100px", marginBottom: "60px" }} className="main">
      <Grid spacing={1} container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={ContactImg} />
        </Grid>
        <Grid style={{ marginTop: "50px" }} item lg={6} md={6} sm={12} xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
