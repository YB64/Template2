const styles = {
  gridContainer: {
    flexGrow: 1,
     width: 1516,
    background: "rgba(42, 38, 38, 1)",
    // width: 1463,
    marginTop:1,
     display: "inline-flex",
  },
  gridLeft: {
  
    paddingLeft: 132,
    paddingTop: "120px",
  },

  gridRight: {
    
    paddingTop: 134,
  },

  headings: {
    fontFamily: "Playfair Display, serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 64,
    lineHeight: "85px",
    color: "#FFFFFF",
    textAlign:"left",
  },
  content: {
    fontFamily: "Open Sans, serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "33px",
    color: "#FFFFFF",
    width: 500,
    paddingBottom: 174,
    paddingRight: "48.21",
    textAlign:"left",
  },
  inputName: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "36px",
    letterSpacing: "0em",
    width: 645.79,
    paddingLeft: 21,
    border: "None",
    borderRadius: 9,
    height: 56,
    paddingTop: 0,
    marginTop: 0,
  },
  button: {
    height: 69,
    width: 294,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#FFFFFF",
    marginLeft: 370,
    marginTop: 39,
    boxBorder: "None",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
    background: "#40BA4C",
    borderRadius: 12,
    "&:hover": {
      backgroundColor: "rgba(64, 186, 76, 1)",
      boxShadow: "none",
    },
  },
};

export default styles;
