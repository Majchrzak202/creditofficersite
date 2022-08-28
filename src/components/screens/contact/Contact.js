import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { Mode } from "@mui/icons-material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_11vyjye",
        "template_l9mkf1y",
        form.current,
        "89MLTuzm8HTh0ZBDQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container style={{ marginBottom: "50px" }} component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "black" }}>
          <Mode />
        </Avatar>
        <Typography fontWeight={800} component="h1" variant="h5">
          Umów się na spotkanie
        </Typography>
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="user_name"
                name="from_name"
                required
                fullWidth
                id="from_name"
                label="Name"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="user_surname"
                label="Nazwisko"
                name="from_surname"
                autoComplete="from_surname"
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Adres E-mail"
                autoComplete="user_email"
                type="text"
                name="from_email"
                id="from_email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                minRows={8}
                required
                fullWidth
                name="message"
                label="Treść wiadomości"
                type="message"
                id="message"
                autoComplete="New message"
              />
            </Grid>

            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            value="Send"
            sx={{ mt: 3, mb: 2 }}
          >
            Wyślij
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
