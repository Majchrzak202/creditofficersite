import React from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  CardMedia,
  Card,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MainPhoto from "./../../../assets/MainPhoto.png";

const useStyles = makeStyles({
  grid: {
    /*  backgroundColor: "gray",
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: 1,
  paddingBottom: 1, */
  },
});
const MainPage = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "30px",
        
      }}
    >
      <Grid style={{ height: "100%" }} className={classes.grid} container>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          xs={12}
          sm={12}
          md={7}
          lg={7}
          item
        >
          <Card
            style={{
              borderRadius: "0px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "hsla(0, 0.00%, 100.00%, 1.00)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              width: "auto",
              paddingBottom: '30px',
              paddingTop: '60px'
            }}
          >
            <Typography
              style={{ fontSize: "30px", fontWeight: "700", width: '80%' }}
              variant="h1"
            >
              „Jeśli priorytety Klientów nie są naszymi priorytetami, nie mamy
              żadnych priorytetów”
            </Typography>
            <Typography
              align="right"
              style={{ color: "grey", marginLeft: "50px" }}
            >
              ~Roger Dow
            </Typography>
          </Card>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            
          }}
          xs={12}
          sm={12}
          md={5}
          lg={5}
          item
        >
          <CardMedia src={MainPhoto}>
            <img
              style={{ height: "100%", width: "100%", margin: 'auto' }}
              src={MainPhoto}
            />
          </CardMedia>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
