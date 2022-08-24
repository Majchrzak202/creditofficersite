import React from "react";
import useStyles from "./Styles";
import { useParams } from "react-router";
import offerSegments from "../../components/consts/Offers";
import { Paper, Box, Card, Typography, Button } from "@mui/material";

const ProductPage = () => {
  const { id } = useParams();
  const classes = useStyles();

  const title = offerSegments[id - 1].title;
  const backgroundImage = offerSegments[id - 1].backgroundImage;
  const longDescription = offerSegments[id - 1].longDescription;
  ;

  console.log(title);

  return (
    <Box>
      <Box className={classes.page}>
        <Paper
          sx={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          }}
          className={classes.paperContainer}
        ></Paper>
      </Box>
      <Box className={classes.secondPage}>
        <Card
          sx={{ bgcolor: "rgba(220, 220, 220, 0)" }}
          className={classes.card}
        >
          <Typography style={{ color: "white" }} variant="h3" fontWeight={700}>
            {title}
          </Typography>
        </Card>
      </Box>
      <Box className={classes.thirdPage}>
        <Box className={classes.description}>
          <Typography align="inherit">
            {longDescription}
          </Typography>
        </Box>
        <Button style={{ marginTop: "50px" }}>Skontaktuj się ze mną</Button>
      </Box>
    </Box>
  );
};

export default ProductPage;
