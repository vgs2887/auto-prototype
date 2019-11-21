/**
 * Zip input to find the city and state search
 */
import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment
} from "@material-ui/core";
import IconSearch from "@material-ui/icons/Search";

// flag to set when the search has been called so there isn't a continuous loop of api calls
let didSearch = false;

/**
 * Use to determine when to call the api 
 */
const Search = (handleSearch, zip) => {
  // only call the api when the zip is 5 characters long and !didSearch
  if (!didSearch && zip.length === 5) {
    didSearch = true;
    handleSearch();
  }
  if (zip.length < 5) didSearch = false;
};

Search.propTypes = {
  handleSearch: PropTypes.func,
  zip: PropTypes.string
};

const ZipInput = ({ zip, handleChange, handleSearch }) => {
  Search(handleSearch, zip);
  return (
    <FormControl>
      <InputLabel htmlFor="zipcode">Zip Code</InputLabel>
      <Input
        id="zipcode"
        type="search"
        value={zip}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconSearch />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

ZipInput.propTypes = {
  zip: PropTypes.string,
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func
};

export default ZipInput;
