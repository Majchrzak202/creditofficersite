import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: '#F5F5F5'
  },
  container: {
    marginTop: "5px",
    width: "50vh",
    padding: "20px",
    display: 'flex'
  
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5px'
    
   
  },
  box: {
    padding: "70px",
    borderRadius: "99%",
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svgIcon: {
    transform: "scale(2.5)",
    "&:hover": {
      transform: "scale(3.5)",
      transition: "all .2s ease",
    },
  },
});

export default useStyles;
