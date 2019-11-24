import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { FaCheckCircle } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '61%'
  },
}));

const addressValidation =
{
  "AddressLineOne": null,
  "AddressLineTwo": null,
  "city":null,
  "state":null,
  "zipCode":null
}


export default function App() {
  const classes = useStyles();
  const [address, setAddress] = React.useState("");
  const [hidden,setHidden] = React.useState(false);


  
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    setAddress(value);
    console.log("Address Is "+JSON.stringify(setAddress));
    console.log("results Are "+JSON.stringify(results[0].formatted_address));
    const formattedAddress = results[0].formatted_address ;
    console.log("results Are "+JSON.stringify(formattedAddress));
    var parser = require('parse-address'); 
  console.log(`my object is: ${JSON.stringify(parsed)}`);
  console.log(parsed);
    var parsed = parser.parseLocation(formattedAddress.toString());
    console.log(`my object is: ${JSON.stringify(parsed)}`);
    console.log(parsed);

    addressValidation.AddressLineOne=parsed.number + " "+parsed.street+" "+parsed.type;
    addressValidation.city=parsed.city;
    addressValidation.state=parsed.state;
    addressValidation.zipCode=parsed.zip;
    console.log("AddressLine1 : "+JSON.stringify(addressValidation.AddressLineOne));
    console.log("AddressLine2 : "+JSON.stringify(addressValidation.AddressLineTwo));
    console.log("city : "+JSON.stringify(addressValidation.city));
    console.log("state : "+JSON.stringify(addressValidation.state));
    console.log("zipCode : "+JSON.stringify(addressValidation.zipCode));
    console.log("addressValidation : "+JSON.stringify(addressValidation));

    axios.post('https://8q1rdb7vif.execute-api.us-east-1.amazonaws.com/v1/pc/auto/addressvalidationexpapi', addressValidation)
    .then(response => {setHidden(response.data.isValid)})
    .catch(error =>{console.log("Address Validation"+error)});
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
             {console.log("hidden is"+hidden)}
             {hidden ? <p><FaCheckCircle color="green"/> Address is Valid. </p> : null}

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