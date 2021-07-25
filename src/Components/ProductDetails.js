import res from "./resource";
import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import "./ProductDetails.css";
import ImageScroller from 'react-image-scroller';
import { Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import DividerStyle from './Dividercss';

function ProductDetails(props){
    const useStyles = makeStyles(DividerStyle);
    const classes=useStyles();

   return (
    <div className="productDetailsContainer">
        <div className="PdtHeading">
        Product Details
            <hr className="underline" />
            
        </div>
        
        <div className="desContainer"> {props.description} </div>
        <div className="Products">  
            <ImageScroller>
                {props.products.map((product)=>(
                
                <Card className="pdt" variant="outlined" >
                <img src={product.img}></img>
                <CardContent>
                    {product.label}
                </CardContent>
                </Card>
            
                ))}
                </ImageScroller>
            

        </div>
    </div>
   ) ;

}
export default ProductDetails;