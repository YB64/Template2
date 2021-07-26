import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import styles from "./contactDataCss.js";

const useStyles = makeStyles(styles);

const ContactData = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerDiv}>
      <Typography className={classes.head}>Contact Us</Typography>
      <hr className={classes.smallBorder} />
      <Typography className={classes.subHead}>
        Lorem ipsum dolor sit amet, conseur adicing elit. Mauris venenatis
      </Typography>

      <div className={classes.contactType}>
        <div>
          <MyLocationIcon style={{ fontSize: 36, paddingTop: 6 }} />
        </div>
        <div>
          <Typography className={classes.attribute}>Address:</Typography>
        </div>
        <div className={classes.attributeData}>
          204/131 K Block Yashoda Nagar, Kanpur, 208011
        </div>
      </div>
      <div className={classes.contactType}>
        <div>
          <PhoneIcon style={{ fontSize: 36, paddingTop: 6 }} />
        </div>
        <div>
          <Typography className={classes.attribute}>Phone:</Typography>
        </div>
        <div className={classes.attributeData}>6387707800</div>
      </div>
      <div className={classes.contactType}>
        <div>
          <EmailIcon style={{ fontSize: 36, paddingTop: 6 }} />
        </div>
        <div>
          <Typography className={classes.attribute}>Email:</Typography>
        </div>
        <div className={classes.attributeData}>rgupta1@ch.iitr.ac.in</div>
      </div>
    </div>
  );
};

export default ContactData;
