import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import "./stylePaymentPage.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function UncontrolledTextField() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: 'white', height: '20vh' }}>
            <form className={classes.container} noValidate autoComplete="off">
                <div>
                    <TextField
                    required
                    id="outlined-FirstName"
                    label="First Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-LastName"
                    label="Last Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-CardNumber"
                    label="Card Number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-ExpiryDate"
                    label="Expiry Date"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-PIN"
                    label="PIN"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-CVV"
                    label="CVV"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-Nickame"
                    label="Nickame"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                </div>
            </form>
        </Typography>
    </Container>  
  );
}
