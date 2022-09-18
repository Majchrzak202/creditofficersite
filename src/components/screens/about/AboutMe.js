import React from "react";
import AboutPhoto from "./../../../assets/About.jpeg";
import { Box, Typography } from "@mui/material";
import useStyles from "./Styles";

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box style={{ marginTop: "50px" }}>
        <img className={classes.img} src={AboutPhoto} alt="about" />
      </Box>
      <Box style={{ marginTop: "15px" }}>
        <Typography
          variant="h1"
          style={{ fontSize: "30px", fontFamily: "Open Sans", fontWeight: 800 }}
        >
          Cześć, z tej strony Joanna Filip
        </Typography>
        <Typography
          variant="h4"
          style={{
            fontSize: "18px",
            fontFamily: "Open Sans",
            fontWeight: 500,
            padding: "70px",
            textAlign: "center",
          }}
        >
          Jestem pośrednikiem kredytowym z ponad 10 letnim doświadczeniem
          zawodowym. Przez ten czas pomogłam setkom klientów w realizacji
          ambitnych planów i inwestycji. Cenię sobię jasną komunikację
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
