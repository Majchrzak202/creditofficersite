import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  homepage: {
    minHeight: "100vh",
    dispaly: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomePage = () => {
  const classes = useStyles();
  return <div className={classes.homepage}>Yo yo yo </div>;
};

export default HomePage;
