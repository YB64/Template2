const homestyles = {
    logocontainer:
    {
        textAlign: 'center',
        backgroundColor: 'White',
    },
    productimg: {
        width: '855px',
        height: '702px',
       marginTop:"140px",
       
background:  "#C4C4C4",
border: "1px solid #000000",
boxSizing: "border-box",
/* main photo */

boxShadow: "140px -58px 17px rgba(0, 0, 0, 0.2)",


    },
    mainContainer:{
        
        backgroundColor : 'white',
        marginTop : '180px',
        
            
            width: '1516px',
            height: "857px",
            
            display: "inline-flex"   ,
            background: "rgba(5, 0, 0, 0.84)",
            overflow:"hidden",
            
    },
    textContainer:{
       marginLeft:"0px",
            
    },
    imageContainer:{
        
       

    },
    tagline:{
        
        width: "200px",
        display: "block"   ,
        color: "black",
        textAlign:"left",
        marginBottom:"0px",
        /* Title */
        
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "64px",
        lineHeight: "84px",
       
        
        
        
    },
    taglineDescription:{
        
width: "484px",
height: "124px",


/* subtitle */

fontFamily: "Playfair Display",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "36px",
textAlign:"left",
lineHeight: "48px",
        color : 'black',
        marginTop:"10px",
        marginBottom:"10px"
    },
    text:{
        padding : "250px 89px ",
        backgroundColor : "white",
        color : 'black'
    },
    content: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '34px',
    },
    cta: {

    },
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#0069d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      },
      ctaButton: {
        WebkitBorderRadius: "6",
        MozBorderRadius: "6",
        borderRadius: "6px",
        fontFamily: "Arial",
        color: "#ffffff",
        fontSize: "20px",
        background: "#40BA4C",
        textDecoration: "none",
        width:"293px",
        height:"58px",
        display:"block"
      },
      
    
};

export default homestyles;