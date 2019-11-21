/**
 * GoogleMap.js
 *
 * Google Map iFrame component using lat and long to create a url
 * to display a map
 */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  iframe: {
    width: "45%",
    border: "1px solid #ddd",
    marginTop: 20
  }
};

const LatLon = (lat, lon) => {
  let src =
    "https://maps.google.com/maps?q=" +
    lat +
    "," +
    lon +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return src;
};

/**
 * @param {Object} props
 */
const GoogleMap = props => {
  let { classes, lat, lon, height } = props;
  return (
    <iframe
      title="Google Map"
      className={classes.iframe}
      height={height}
      src={LatLon(lat, lon)}
    />
  );
};

// height of the iframe
GoogleMap.defaultProps = {
  height: 200
};

GoogleMap.propTypes = {
  props: PropTypes.object
};

export default withStyles(styles)(GoogleMap);
