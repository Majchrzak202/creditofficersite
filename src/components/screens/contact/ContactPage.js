import React from "react";
import ContactForm from "./ContactForm";
import ContactImg from "./../../../assets/ContactPhoto.jpeg";
import { Grid, CardMedia } from "@mui/material";

const ContactPage = () => {
  return (
    <div style={{ marginTop: "100px", marginBottom: '60px' }} className="main">
      <Grid spacing={1} container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img style={{width: '400px', height: '599px'}} src={ContactImg} />
        </Grid>
        <Grid style={{marginTop: '50px'}} item lg={6} md={6} sm={12} xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
