import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '61%'
  },
}));

export default function AddPrimaryOwnerDD(drivers) {
  const classes = useStyles();
  const [primdriver, setPrimdriver] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setPrimdriver(event.target.value);
    drivers.primarydriver(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  console.log(drivers)
  return (
    
    <div>
      <Button className={classes.button}  onClick={handleOpen}>
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" style={{textAlign:"left", paddingLeft:'0px'}}> Add a Primary Owner</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={primdriver}
          onChange={handleChange}
        >
           {this.BIcoverages.map(driver=>{
               return <MenuItem value={driver.username}>{driver.username}</MenuItem>
           })}
          
        </Select>
      </FormControl>
    </div>
  );
}