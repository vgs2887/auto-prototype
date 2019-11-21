/**
 * Reusable Material UI label and input for the form
 */
import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Input } from "@material-ui/core";

const TextInput = props => {
  let { id, label, value, disabled } = props;
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} type="text" value={value}  />
    </FormControl>
  );
};

TextInput.propTypes = {
  props: PropTypes.object
};

// text inputs are disabled by default
TextInput.defaultProps = {
  disabled: true
};

export default TextInput;
