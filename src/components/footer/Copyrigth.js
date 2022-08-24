import React from "react";
import { Typography, Box } from "@mui/material";

const Copyrigth = () => {
  return (
    <Box
      style={{
        backgroundColor: "black",
        height: "5vh",
        color: "#C0C0C0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        style={{ marginLeft: "15px", fontSize: "14px" }}
        fontWeight={200}
      >
        Copyright Ⓒ 2022 JoannaFilip.pl | All rights reserved
      </Typography>
    </Box>
  );
};

export default Copyrigth;
