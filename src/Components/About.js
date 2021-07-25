import React from 'react';
import "./About.css";
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DividerStyle from './Dividercss';


function About(props){


    const useStyles = makeStyles(DividerStyle);
    const classes=useStyles();
    
    
    return (
        <>
        <div className="container">
        <div className="col-1">
            <img src={props.image} alt={props.alt}></img>
        </div>
        
        <div className="col-2">
                 
            <h1 className="AboutLabel">{props.label}</h1>
            <Divider className={classes.underline} variant='left' />  
            <br/>
            <p>{props.description}</p>
        </div>
        </div>
        </>
        );
 
 }
 
 
export default About;



























