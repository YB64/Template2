import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './sendMessageCss.js';

const useStyles = makeStyles(styles);

const SendMessage = () => {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.head}>
                Send Us a Message
            </Typography> 
        </>
    )
}

export default SendMessage;
