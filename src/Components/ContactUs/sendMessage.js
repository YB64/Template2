import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './sendMessageCss.js';

const useStyles = makeStyles(styles);

const SendMessage = () => {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.head}>
                Send Us a Message
            </Typography> 
            <input placeholder="Email" className={classes.inputName}/>
            <input placeholder="Phone" className={classes.inputName}/>
            <textarea type="textarea" placeholder="Message" className={classes.inputMessage}/>
            <Button color="primary" variant="contained" className={classes.button}>Send</Button>
        </>
    )
}

export default SendMessage;