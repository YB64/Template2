
import React from "react";


import { makeStyles } from '@material-ui/core/styles';

import styles from "./ProductDetailscss";
const useStyles = makeStyles(styles);

function ProductDetails(props){
    
    const classes=useStyles();

   return (
    <div className={classes.productDetailsContainer}>
        <div className={classes.PdtHeading}>
        Product Details
            <hr className={classes.underline} />
            
        </div>
        
        <div className={classes.desContainer}> {props.description} </div>
        
        <div className={classes.Products}>  
       
            
                {props.products.map((product)=>(
                
                <div className={classes.pdt}  >
                    
                <img src={product.img} className={classes.pdtimage}></img>
                
                {product.label}
                
                   
                </div>
                
                ))}
                
                
            

        </div>
        
    </div>
   ) ;

}
export default ProductDetails;