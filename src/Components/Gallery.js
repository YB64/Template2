import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import styles from "./Gallerycss.js";
const useStyles = makeStyles(styles);

function Gallery(props){
    const classes = useStyles();

   return (
    <div className={classes.galleryContainer}>
        <div className={classes.galleryHeading}>
        Gallery
            <hr className={classes.underline} />
            
        </div>
        
        <br/>
        
        <div className={classes.allImages}>  
       
            
                {props.gallery.map((galleryImage)=>(
                
                <div className={classes.galleryImage}  >
                    
                <img className={classes.galleryImage1} src={galleryImage.img} ></img>
                
               
                
                   
                </div>
                
                ))}
                
                
            

        </div>
        
    </div>
   ) ;

}
export default Gallery;