import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './Footercss.js';
import res from './resource.js';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(styles);

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Divider className={classes.hr} />
            <div className={classes.root}>
                <div className={classes.name}>
                    {res["nav"]["companyName"]["label"]}
                </div>
                <div className={classes.maincontent}>
                    {res["nav"]["links"].map((item, index) => {
                        return (
                            <span className={classes.content}>
                                {item["label"]}
                            </span>
                        )
                    })}
                </div>
            </div >

            <div className={classes.bottombar}>
                &copy; {res["nav"]["companyName"]["label"]}, created by MyHashCode
            </div>
        </>
    )
}

export default Footer
