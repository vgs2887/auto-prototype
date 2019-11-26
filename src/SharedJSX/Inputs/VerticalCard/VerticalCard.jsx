import React from "react";
import shortid from 'shortid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CancelIcon from "@material-ui/icons/Cancel";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { deletedriveraction, deletevehicleaction, deletepropertyaction,deleteDriverFromQuote,deleteVehicleFromQuote  } from "../../../actions";
import { connect } from 'react-redux';

const useStyles = {
  card: {
    width: 140,
    borderRadius: 200,
    height: 320,
    boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 2px rgba(0,0,0,0.12)',
 
  },
  media: {
    margin: 15,
    height: 100,
    borderRadius: 50
  },
  content: {
    textAlign: "center",
    padding:13,
    height:65
  },
  horizon: {
    border: "1px solid lightgrey",
    width: 120
  },
  button: {
    marginTop: '-18px',
    color: "red"
  }
};

class SimpleCard extends React.Component {

  onDeleteDriverClick = () => {
    if (this.props.type === "driver")
    {      
      this.props.quote.drivers.splice(this.props.index,1)
      console.log("DDsdfhjkshdfkjhD printing inside delete driver click --- "+JSON.stringify(this.props.quote.drivers))
      this.props.deleteDriverFromQuote(this.props.quote)
      this.props.deletedriveraction(this.props.id);

    }      
    else if (this.props.type === "vehicle") 
      {
        this.props.quote.vehicles.splice(this.props.index,1)
        console.log("DDsdfhjkshdfkjhD printing inside delete vehicle click --- "+JSON.stringify(this.props.quote.vehicles))
      this.props.deleteVehicleFromQuote(this.props.quote)
        this.props.deletevehicleaction(this.props.id);
      }
    else if (this.props.type === "property") 
      this.props.deletepropertyaction(this.props.id);
  };

  componentDidMount(){
    this.setState({ id: shortid.generate() });
  }
  getMilteryStatus=()=>{
    console.log('chaitu in miltery status')
    if(!this.props.showDeleteButton){
      console.log('chaitu in miltery status')
      return this.props.milteryStatus
    }
    return ""
  }
  render() {
    return (
      <Card style={useStyles.card}>
        <CardMedia
          style={useStyles.media}
          image={this.props.image}
          title={this.props.title}
        />
        <CardContent style={useStyles.content}><div><b>{this.props.milteryStatus}</b></div>{this.props.name}</CardContent>

        <CardContent style={useStyles.content}>
          {this.props.data}
          <br />
          <b>{this.props.model} </b>
        </CardContent>
        <br/>
        {
           this.props.showDeleteButton && 
          (
            <IconButton
              style={useStyles.button}
              aria-label="delete"
              onClick={this.onDeleteDriverClick}
            >
              <CancelIcon />
            </IconButton>
          )
        }
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  showDeleteButton: PropTypes.bool
};

const mapStateToProps = (state) => {
  console.log("Updated state for quote " + JSON.stringify(state.quote))
  return {
      "quote":state.quote
  }
}

export default connect(
  mapStateToProps,
  { deletedriveraction, deletevehicleaction, deletepropertyaction,deleteDriverFromQuote ,deleteVehicleFromQuote } 
)(SimpleCard);