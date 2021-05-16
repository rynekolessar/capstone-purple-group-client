import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

// CHANGE THE TYPOGRAPHY TAGS TO LINKS

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="center" className={classes.title}>
            Contact Us
          </Typography>
          <Typography variant="h6" align="center" className={classes.title}>
            About Us
          </Typography>
          <Typography variant="h6" align="center" className={classes.title}>
            Browse
          </Typography>
          <Typography variant="h6" align="center" className={classes.title}>
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
