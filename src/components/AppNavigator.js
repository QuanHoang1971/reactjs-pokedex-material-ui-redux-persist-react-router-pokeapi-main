import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#52384B",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "White",
  },
}));

export default function AppNavigator() {
  //use useStyle to style Class Component in Material Ui
  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title} variant="h5">
            Pokemon
          </Typography>
        </Link>
        <Link to="/favourites" className={classes.link}>
          <Typography
            className={classes.title}
            variant="h5"
            style={{ marginLeft: 35 }}
          >
            Favourites
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
