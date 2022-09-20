import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import offerSegments from "../consts/Offers";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Typography
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        Oferta
      </Typography>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {offerSegments.map((offer) => (
          <Link
            key={offer.title}
            style={{ textDecoration: "none", color: "black" }}
            to={`/kredyty/${offer.id}`}
          >
            <MenuItem onClick={handleClose}>{offer.title}</MenuItem>
          </Link>
        ))}
        {/* <MenuItem onClick={handleClose}>Kredyty firmowe</MenuItem>
        <MenuItem onClick={handleClose}>Kredyty inwestycyjne</MenuItem>
        <MenuItem onClick={handleClose}>Kredyty rolnicze</MenuItem>
        <MenuItem onClick={handleClose}>Kredyty gotówkowe</MenuItem>
        <MenuItem onClick={handleClose}>Kredyty konsolidacyjne</MenuItem>
        <MenuItem onClick={handleClose}>Leasingi</MenuItem> */}
      </Menu>
    </div>
  );
}

export default SimpleMenu;
