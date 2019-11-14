import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    width: 140,
    borderRadius: 200,
    height: 300
  },
  media: {
    margin: 15,
    height: 100,
    borderRadius: 50
  },
  content: {
    textAlign: "center"
  },
  horizon: {
    border: "1px solid lightgrey",
    width: 120
  },
  button: {
    marginLeft: 40,
    color: "red"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  const { image, title, name, model, data } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://www.w3schools.com/howto/img_avatar.png"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>sgftgfhfghgj</CardContent>
      <hr className={classes.horizon} />
      <CardContent className={classes.content}>
        sgftgfhfghgj
        <br />
        <b>khjkguykgu </b>
      </CardContent>

      <IconButton className={classes.button} aria-label="delete">
        <CancelIcon />
      </IconButton>
    </Card>
  );
}
