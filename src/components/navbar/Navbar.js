import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@mui/icons-material";

import useStyles from "./Styles";

const pages = ['Start', 'Dlaczego Ja', 'Oferta', 'Rekomendacje', 'Kontakt']

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className={classes.appbar}>
      <AppBar sx={{ bgcolor: "#37393b" }} position="fixed">
        <Container maxWidth="xl">
          <Toolbar  className={classes.toolbar} disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "helvetica",
                fontWeight: 700,
                letterSpacing: ".1.5rem",
                color: "white",
                textDecoration: "none",
              }}
            >
        Joanna Filip    
            </Typography>

            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "helvetica",
                fontWeight: 400,
                
                color: "inherit",
                textDecoration: "none",
              }}
            >
              JOANNA FILIP 
              EKSPERT KREDYTOWY
            </Typography>

            <div className={classes.grow} />
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

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ><MenuIcon/></IconButton>
              
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
                    <Typography
                      style={{ textDecoration: "none" }}
                      textAlign="center"
                      variant="inherit"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
