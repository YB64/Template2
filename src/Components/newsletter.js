import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./newsletterCss.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(styles);

const Newsletter = () => {
  const classes = useStyles();
  return (
    <Grid
    container
      className={classes.gridContainer}
      justifyContent="center"
      spacing={0}
    >
      <Grid item xs={6} className={classes.gridLeft}>
        <Typography className={classes.headings}>Newsletter</Typography>
        <Typography className={classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          eleifend felis ex, eget placerat lacus eleifend sit amet. mauris
          lectus.
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.gridRight}>
        <input placeholder="Email address" className={classes.inputName} />
        <Button color="primary" variant="contained" className={classes.button}>
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
