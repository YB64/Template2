import React from "react";
import "./Gallery.css";

function Gallery(props){
    

   return (
    <div className="galleryContainer">
        <div className="galleryHeading">
        Gallery
            <hr className="underline" />
            
        </div>
        
        <br/>
        
        <div className="allImages">  
       
            
                {props.gallery.map((galleryImage)=>(
                
                <div className="galleryImage"  >
                    
                <img src={galleryImage.img} ></img>
                
               
                
                   
                </div>
                
                ))}
                
                
            

        </div>
        
    </div>
   ) ;

}
export default Gallery;