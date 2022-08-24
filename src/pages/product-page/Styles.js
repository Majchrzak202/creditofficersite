import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    minWidth: "100vw",
  },
  paperContainer: {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${"https://pixabay.com/get/g226cbef55b413d3796cd077a0a16e4ce178af8205cdf00bb76d9e2a5363d807c5d6aac6d906c93e444c8f7f50f031516e4264b56be82647092d4017da78b51569650a0dc15c4ff30e3327791ccb550a2_1280.jpg"})`,
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundSize: "cover",
    marginTop: "-70px",
  },
  secondPage: {
    minHeight: "20vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  thirdPage: {
    minHeight: "50vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "50px",
  },

  card: {
    width: "60vw",
    minHeight: "30vh",
    marginTop: "-600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70vw",
  },
});

export default useStyles;
