import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '61%'
  },
}));

export default function App() {
  const classes = useStyles();
  const [address, setAddress] = React.useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <FormControl className={classes.formControl}>
             <InputLabel id="demo-controlled-open-select-label" style={{textAlign:"left", paddingLeft:'0px'}}> Enter your location</InputLabel>
             
             <Input {...getInputProps({ placeholder: "Type address" })} style={useStyles.InputWidth}></Input>

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
            </FormControl>
        )}
      </PlacesAutocomplete>
    </div>
  );
}