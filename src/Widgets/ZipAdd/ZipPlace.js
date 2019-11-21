/**
 * Inputs for the zip to enter and the city and state results
 */
import React from "react";
import PropTypes from "prop-types";
import NotFound from "./ZipError";
import ZipInput from "./ZipInput";
import TextInput from "./TextInput";
import { FormControl, InputLabel, Input } from "@material-ui/core";

/**
 * @param {Object} data | Input values and functions to call
 */
const ZipPlace = ({ data }) => {
  return (
    <div>
      {data.notFound && <NotFound open={true} />}
      <ZipInput
        zip={data.zip}
        handleChange={data.handleChange}
        handleSearch={data.handleSearch}
      />
      <TextInput id="city" label="City" value={data.city} />
      <TextInput id="state" label="State" value={data.state} />
    </div>
  );
};

ZipPlace.propTypes = {
  // data call from the api call
  data: PropTypes.object
};

export default ZipPlace;
