import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/picture.jpg";
import SkillsPage from "./SkillsPage";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      margin: "0 auto",
    },
    headerText: {
      ...styles.headerText,
    },
    aboutText: {
      marginTop: "6rem",
    },
    divider: {
      ...styles.divider,
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "1rem",
      lineHeight: "1.6rem",
    },
    link: {
      color: "black",
      textShadow: "1px 1px #b2dfdb",
      textDecoration: "none",
      borderBottom: "1px solid #b2dfdb",
      "&:hover": {
        color: "#b2dfdb",
        cursor: "pointer",
      },
    },
    picture: {
      maxHeight: "100%",
      maxWidth: "100%",
      margin: "1rem",
      marginBottom: "6rem",
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
      boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
      borderRadius: "50%",
    },
  });
  const classes = useStyles();

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="AboutMe">
        <Typography className={`${classes.aboutText} ${classes.headerText}`}>
          About Me
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography className={classes.bodyText}>
          Hey there, <b> My Mame Is Saad.</b> I am a third year Computer and info systems engineer pursuing my degree 
          from NED University, Karachi. <br /> <br /> I am a learning coder and developer and I have a good 
          command in new technologies and has a good searching and management skills. <br /> <br />
          I love doing frontend work, also I am good at playing with colors and visuals.
          {/* <Link
            onClick={scrollToContact}
            className={classes.link}
            underline="none"
          >
            contact information and links here
          </Link> */}
          .
        </Typography>
        <Box
          component="img"
          src={picture}
          alt="A picture of me"
          className={classes.picture}
        />
      </Box>
      <SkillsPage />
    </div>
  );
};

export default AboutPage;
