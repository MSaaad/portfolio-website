import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
  Tooltip,
  makeStyles,
  Zoom,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FbIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@material-ui/icons/Instagram';
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

const ContactPage = () => {
  const useStyles = makeStyles({
    mainDiv: {
      backgroundColor: "rgba(0, 0, 0, 0.92)",
      position: "relative",
      bottom: "0",
      marginTop: "5rem",
    },
    columnDiv: {
      ...styles.columnDiv,
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    headerText: {
      ...styles.headerText,
    },
    contactText: {
      color: "#eeeeee",
      margin: "0.5rem",
      textShadow: "0.1rem 0.1rem #4f4f4f",
    },
    divider: {
      ...styles.divider,
    },
    contactDivider: {
      backgroundColor: "#eeeeee",
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      margin: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        margin: "0.1rem"
      },
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    fb: {
      fontSize: "2.6rem",
    },
  });
  const classes = useStyles();

  const icons = (
    <Box className={classes.rowDiv} id="Contact">
      <Tooltip title="Facebook" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="Fb link"
          onClick={() => window.open("https://www.facebook.com/msaaaaad/")}>
          <FbIcon className={classes.fb} />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="LinkedIn Link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/muhammad-saad-4791ab1b3/")
          }
        >
          <LinkedInIcon className={classes.linkedIn} />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="GitHub link"
          onClick={() => window.open("https://github.com/MSaaad/")}
        >
          <GitHubIcon className={classes.github} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Instagram" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="Instagram link"
          onClick={() => window.open("https://instagram.com/msaaaaad_/")}
        >
          <InstagramIcon className={classes.github} />
        </IconButton>
      </Tooltip>
     </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography className={`${classes.headerText} ${classes.contactText}`}>
        Contact Me
      </Typography>
      <Divider
        classes={{ root: `${classes.divider} ${classes.contactDivider}` }}
      />
      <Box className={classes.rowDiv}>
        <Typography className={classes.emailText}>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <Link href="mailto: saad99u@gmail.com" className={classes.link}>
          saad99u@gmail.com
        </Link>
      </Box>
      {icons}
    </Box>
  );
};

export default ContactPage;
