import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  CardMedia,
} from "@mui/material";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@mui/icons-material";
import SocialNavbar from "../social-navbar/SocialNavbar";
import useStyles from "./Styles";
import SimpleMenu from "./SimpleMenu";
import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";



const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    <Link className={classes.link} to="omnie">
      O mnie
    </Link>,
    <SimpleMenu />,
    <Link className={classes.link} to="/kontakt">
      Kontakt
    </Link>,
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box style={{ marginTop: "50px" }}>
      <AppBar position="fixed">
        <SocialNavbar />
        <Container
          sx={{
            bgcolor: "#37393b",
            height: "5rem",
          }}
          maxWidth="xxl"
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <CardMedia
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  marginTop: "5px",
                }}
              >
                <img style={{ width: "60%", height: "60%" }} src={Logo} />
              </CardMedia>
            </Link>
            <Link to="/">
              <CardMedia
                variant="h6"
                sx={{
                  display: { xs: "flex", md: "none" },

                  marginTop: "5px",
                }}
              >
                <img style={{ width: "60%", height: "60%" }} src={Logo} />
              </CardMedia>
            </Link>

            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
              }}
              className={classes.grow}
            />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={Math.random()}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", color: "white" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                className={classes.mobilemenu}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
