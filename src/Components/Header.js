import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Headercss.js';
import res from './resource.js';

const useStyles = makeStyles(styles);

const Header = () => {
    const classes = useStyles();
    const arr = res["nav"]["links"];
    arr.sort((a, b) => a["order"] > b["order"]);

    return (
        <>
            {console.log(arr)}
            <AppBar color="#555">
                <Toolbar>
                    <div className={classes.logocontainer}>
                        <img src={res["nav"]["logo"]["src"]} alt={res["nav"]["logo"]["alt"]} className={classes.logo} />
                    </div>
                    <div className={classes.maincontent}>
                        {arr.map((item, index) => {
                            return (
                                <span className={classes.content}>
                                    {item["label"]}
                                </span>
                            )
                        })}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header