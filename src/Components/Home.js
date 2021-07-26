import React from 'react'
import data from './resource.js'
import { makeStyles } from '@material-ui/core/styles';
import styles from './Homecss';

import { Container } from '@material-ui/core';

const useStyles = makeStyles(styles);




const Home = () => {
    const classes = useStyles();

    
    return (
        <>
            <div className={classes.mainContainer}>
                <Container   >
                    <div className={classes.text}>
                        <div className={classes.tagline} >
                            {data.home.tagline}
                        </div>
                        <h4 className={classes.taglineDescription}>
                            {data.home.taglineDescription}
                        </h4>
                        
                        <button className={classes.ctaButton}>
                        {data.home.exploreButton[0].label}
                        </button>
                            
                        
                    </div>
                </Container>
                <div className="imageContainer">
                    {/* <ImageListItem> */}
                        <img className={classes.productimg}
                            src={data.home.product_snippet.src}
                        />
                    {/* </ImageListItem> */}
                </div>
            </div>
        </>
    )
}

export default Home
