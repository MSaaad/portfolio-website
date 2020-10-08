import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import theme from "../theme/theme";

const Project = (props) => {
  const useStyles = makeStyles({
    card: {
      boxShadow: "2px 2px 14px rgba(0, 0, 0, 0.3)",
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "75%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    title: {
      fontSize: "1.7rem",
      fontWeight: "bold",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "1rem",
    },
    button: {
      margin: "0.5rem",
      backgroundColor: "teal",
      color: "white",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      "&:hover": {
        backgroundColor: "teal",
      },
    },
    buttonDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
      height: "100%",
      boxShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
    },
    text: {
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => window.open(props.projectLink)}>
          <CardContent>
            <Typography className={classes.title}>{props.title}</Typography>
            {props.icons}
            <Typography className={classes.text}>
              {props.description}
            </Typography>
            <CardMedia
              className={classes.image}
              component="img"
              image={props.image}
              title={props.imageTitle}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box className={classes.buttonDiv}>
            <Button
              className={classes.button}
              onClick={() => window.open(props.projectLink)}
            >
              Live Demo
            </Button>
            <Button
              className={classes.button}
              onClick={() => window.open(props.githubLink)}
            >
              GitHub Link
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Project;
