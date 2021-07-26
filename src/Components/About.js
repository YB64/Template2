import React from 'react';
import styles from "./Aboutcss.js";
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(styles);

function About(props){


    
    const classes=useStyles();
    
    
    return (
        <>
        <div className={classes.container}>
        <div >
            <img className={classes.col_1_img} src={props.image} alt={props.alt}></img>
        </div>
        
        <div className={classes.col_2}>
                 
            <div className={classes.AboutLabel}>{props.label} <hr className={classes.underline} /></div>
            
            <br/>
            <p>{props.description}</p>
        </div>
        </div>
        </>
        );
 
 }
 
 
export default About;



























