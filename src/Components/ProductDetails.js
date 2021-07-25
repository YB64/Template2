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
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

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
       
            
                {props.products.map((product)=>(
                
                <div className="pdt"  >
                    
                <img src={product.img} className="pdtimage"></img>
                
                {product.label}
                
                   
                </div>
                
                ))}
                
                
            

        </div>
        
    </div>
   ) ;

}
export default ProductDetails;