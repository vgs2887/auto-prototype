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
      <div>
    <Container maxWidth="md">
        
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
                    id="outlined-AccountNumber"
                    label="Account Number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="outlined-RoutingNumber"
                    label="Routing Number"
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
    
    </Container>  
    </div>
  );
}
