import React, { useRef, useState } from "react";
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
import { CheckBox } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    marginBottom: "50px",
    padding: "30px",
  },
  box: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ContactForm = () => {
  const form = useRef();
  const classes = useStyles();
  const [visible, setVisible] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setVisible(false);
  };

  return (
    <Container className={classes.main} component="main" maxWidth="md">
      <CssBaseline />
      <Box className={classes.box}>
        <Avatar sx={{ bgcolor: "black" }}>
          <Mode />
        </Avatar>
        <Typography
          style={{
            fontWeight: 600,
          }}
          component="h1"
          variant="h5"
        >
          Umów się na spotkanie
        </Typography>
        {visible ? (
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
                  label="Imię"
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
        ) : (
          <Box
            style={{
              minHeight: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                fontWeight: 600,
              }}
              variant="h5"
            >
              Dziękuję za wiadomość. Odpowiem na nią najszybciej jak to możliwe
            </Typography>
            <CheckBox fontSize="large" />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ContactForm;
