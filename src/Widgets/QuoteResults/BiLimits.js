import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
          <FormControlLabel
            value="$15,000/$30,000"
            control={<Radio color="primary" />}
            label="$15,000/$30,000"
            />
          <FormControlLabel
            value="$50,000/$100,000"
            control={<Radio color="primary" />}
            label="$50,000/$100,000"
          />
          <FormControlLabel
            value="$100,000/$250,000"
            control={<Radio color="primary" />}
            label="$100,000/$250,000"
          />
          <FormControlLabel
            value="$500,000/$1,000,000"
            control={<Radio color="primary"/>}
            label="$500,000/$1,000,000"
          />
        </RadioGroup>
        <FormHelperText>Most popular based on the state, Age of the vehicle, prior insurance selection and Demographics.</FormHelperText>
      </FormControl>
    </div>
  );
}
