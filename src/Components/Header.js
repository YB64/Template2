import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Headercss.js';

var logo="https://www.pngkey.com/png/detail/47-475528_instagramm-clipart-instagram-symbol-instagram-logo-100x100-png.png";

const useStyles = makeStyles(styles);

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="absolute">
                <div className={classes.logocontainer}>
                    <img src={logo} className={classes.logo} />
                </div>
                <div className={classes.maincontent}>
                    <span className={classes.content}>Home</span>
                    <span className={classes.content}>Products</span>
                    <span className={classes.content}>About us</span>
                    <span className={classes.content}>Contact</span>
                    <span className={classes.content}>Demo</span>
                </div>
            </AppBar>
        </>
    )
}

export default Header