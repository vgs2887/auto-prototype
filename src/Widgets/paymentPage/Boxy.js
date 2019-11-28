import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./stylePaymentPage.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    padding: theme.spacing(3, 2),
  },
  control: {
    padding: theme.spacing(3),
  },
  MuiGridRow: {
    flexDirection: 'row !important'
   },
}));

export default function Boxy(props) {
  // Change use state to change the spacing

  // const [spacing] = React.useState(3);
  const classes = useStyles();  


  return (
    <Grid container className={classes.root} spacing={2}>
 
      <Grid item xs={12}>
        <Grid container className={classes.MuiGridRow} justify="center" spacing={3}>
          <Grid item>
            <Paper id="current" className={classes.paper}>{props.value}$ is owed for November</Paper>
          </Grid>
          <Grid item>
            <Paper id="future" className={classes.paper}>{props.value}$ is owed for December</Paper>
          </Grid>
          <Grid item>
            <Paper id="future" className={classes.paper}>{props.value}$ is owed for January</Paper>
          </Grid>
          <Grid item>
            <Paper id="future" className={classes.paper}>{props.value}$ is owed for Febuary</Paper>
          </Grid>
          <Grid item>
            <Paper id="future" className={classes.paper}>{props.value}$ is owed for March</Paper>
          </Grid>
          <Grid item>
            <Paper id="future" className={classes.paper}>{props.value}$ is owed for April</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
