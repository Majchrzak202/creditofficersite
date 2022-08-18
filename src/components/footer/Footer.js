import React from "react";
import { Grid, Container, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box px={{xs: 3, sm: 10 }} py={{xs: 5, sm: 10}} sx={{ bgcolor: "#37393b" }} color='white'>
        <Container maxWidth="lg">
          <Grid  container spacing={5}>
            <Grid  item xs={12} sm={4}>
              <Box borderBottom={1}> Kontakt</Box>
              <Box >
                <Link color="inherit">Zapraszam do kontaktu</Link>
              </Box>
              <Box>
                <Link color="inherit">Formularz Kontaktowy</Link>
              </Box>
              <Box>
                <Link color="inherit">Numer telefonu</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}> Oferta</Box>
              <Box>
                <Link color="inherit">Kontakt</Link>
              </Box>
              <Box>
                <Link color="inherit">Kontakt</Link>
              </Box>
              <Box>
                <Link color="inherit">Kontakt</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>^</Box>
              <Box>
                <Link color="inherit">Kontakt</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
