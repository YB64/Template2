import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './contactUsCss.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SendMessage from './sendMessage.js';
import ContactData from './contactData.js'



const useStyles = makeStyles(styles);

const ContactUs = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.contactPage}>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={0}>
                            <Grid key={0} item>
                                <Paper className={classes.grid0}><SendMessage/></Paper>
                            </Grid>
                            <Grid key={1} item>
                                <Paper className={classes.grid1}><ContactData/></Paper>
                            </Grid>
                    </Grid>
                </Grid>
            </Grid> 
        </div>
        </>
    )
}

export default ContactUs;
