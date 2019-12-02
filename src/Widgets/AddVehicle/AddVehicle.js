import React from "react";
import Input from "@material-ui/core/Input";
import shortid from "shortid";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { setQuoteObject } from "../../actions";
import axios from 'axios'


import history from "../../utils/history";
import "./styleaddvehicle.css";
import path from "../../assets/car.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddHeader from "../QuoteResults/AddHeader";
import AddPrimaryOwnerDD from '../AddPrimaryOwnerDD'
import AddressAutoComplete from "../Vehicles/AddressAutoComplete";
import Header from '../../Widgets/Header/Header'
import {Button} from '@material-ui/core';

const useStyles = {
  content: {
    width: 140,
    borderRadius: 200,
    height: 300
  },
  img: {
    margin: "10 20 0 20",
    height: 20
  },
  input: {
    display: "none",
    width: "60%"
  },
  p: {
    marginTop: 10,
    fontSize: "10px"
  },
  grid: {
    width: "100%"
  },
  InputWidth: {
    width: "60%",
    margin: "0 auto"
  },
  InputWidth_: {
    // paddingLeft: "45%",
    // width: "60%",
    // margin: "0 auto"
  },
  AlignCenter:{
    margin: "0 auto"
  },
  AlignCenterWidth:{
    margin: "0 auto",
    width: "20%"
  }
};
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "#0E2E4952",

  border: 1,
  style: {
    width: "100px",
    height: "100px",
    boxShadow: "-3px 0 11px #0E2E4952",
    opacity: "100%"
  }
};
const postData =
                  {
                    "driverName": "Regina Phelange", 
                    "year": 2018, 
                    "make": "Honda", 
                    "model": "Civic", 
                    "vin": "HODHFOAHDLASDOI", 
                    "mileage": 130000, 
                    "addressLineOne": "4980 usaa blvd", 
                    "addressLineTwo": "apt9999", 
                    "city": "San Antonio", 
                    "state": "Texas", 
                    "zip": "78240"
                   };
     var k;             
class AddVehicle extends React.Component {
  constructor(props) {
    super(props);
    k={...this.props.quote};
    this.state = {
      id: "",
      vin: "",
      year: "",
      make: "",
      model: "",
      miles: "",
      primaryowner:""
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.setState({ id: shortid.generate() });
    this.setState({miles: Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000 + " miles"} );
  }

   handleClose = () => {
    this.setState({menu:null});
  };

  changeHandler = e => {
    if (e.target.id === "vin") {
      this.setState({ vin: e.target.value });
    } else if (e.target.id === "year") {
      this.setState({ year: e.target.value });
    } else if (e.target.id === "make") {
      this.setState({ make: e.target.value });
    } else if (e.target.id === "model") {
      this.setState({ model: e.target.value });
    }
  };
  goBack = () => {
    history.push("/vehicledetails");
  };

  validate = () => {
    let vinError = "";
    let yearError = "";
    let makeError = "";
    let modelError = "";

    if (!this.state.vin) {
      vinError = "vin cannot be blank!!";
    }

    if (!this.state.year) {
      yearError = "year cannot be blank!!";
    }
    if (!this.state.make) {
      makeError = "Make cannot be blank!";
    }

    if (!this.state.model) {
      modelError = "model cannot be blank!!";
    }

    if (vinError || yearError || makeError || modelError) {
      this.setState({
        vinError,
        yearError,
        makeError,
        modelError
      });
      return false;
    } else return true;
  };

  submitHandler = event => {
    // event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      // console.log("shit",postData);
      var pod={}
      pod.driverName=this.state.primaryowner;
      pod.vin=this.state.vin;
      pod.make=this.state.make;
      pod.model=this.state.model;
      pod.year=this.state.year;
      pod.mileage="130000";
      pod.addressLineOne="4980 usaa blvd";
      pod.addressLineTwo="apt9999";
      pod.city="San Antonio";
      pod.state="Texas"
      pod.zip="78240"
      // let v=this.props.quote.vehicles

      // console.log("test1",postData);
      // console.log("test2",k.vehicles);

      k.vehicles=k.vehicles.concat(pod);
      // console.log("test3",k.vehicles);
      // console.log("test",k);
      this.props.setQuoteObject(k); 
      console.log("ADD Vehicle postRequest:  "+JSON.stringify(k))
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/'+this.props.quote.policyId, k)
        .then(response => {console.log("ADD Vehicle Response"+response)})
        .catch(error =>{console.log("ADD Vehicle  ERROR"+error)})
      

      // console.log('shit3',k.vehicles);
      // this.props.addvehicleaction(this.state);
      // history.push("/vehicledetails");
    }
  };
 
  
  onCancelClick = () => {
    history.push("/vehicledetails");
  };

 handleClick = event => {
  //  console.log(event.target)
   this.setState({menu:event.target})
    
  };

  primarydriver = primaryowner => {
    this.setState({primaryowner})
  }

  render() {
    
// console.log(this.state)
    return (
      <div style={{backgroundColor:'#F5F5F5'}}>
        
        <form>
       {/* <AddHeader /> */}
        <Grid container>
          <Grid sm={2} />
          <Grid xs={12} sm={12}>
            <div style={useStyles.InputWidth_}>
              <span
                onClick={this.goBack}
                style={{ border: "none"}}
                // , float: "left" 
              >
                <i class="fa fa-angle-left"></i>
              </span>
              <span>Add New Vehicle</span>
            </div>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
        <Grid container>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={12}>
            <div style={useStyles.InputWidth_}>
              <Box display="flex" justifyContent="center">
                <Box borderRadius="50%" {...defaultProps}>
                  <Box display="flex" justifyContent="center">
                    <div style={useStyles.content}>
                      <label for="file-input">
                        <img style={useStyles.img} src={path} alt="icon" />
                        <p style={useStyles.p}>
                          Upload
                          <br /> Photo
                        </p>
                      </label>
                      <input
                        style={useStyles.input}
                        id="file-input"
                        type="file"
                      />
                    </div>
                  </Box>
                </Box>
              </Box>
            </div>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
        {/* <div>
          <h1>Add New Driver</h1>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          <div>  */}
        <Grid container style={useStyles.grid}>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8} style={useStyles.InputWidth}>
            {/* {JSON.stringify(this.props.quote.drivers)} */}
              <AddPrimaryOwnerDD drivers={this.props.quote.drivers} primarydriver={this.primarydriver}/> 
          </Grid>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8} style={useStyles.InputWidth}>
              <AddressAutoComplete></AddressAutoComplete>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid> 

        <Grid container style={useStyles.grid}>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8} style={useStyles.InputWidth}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Vehicle Identification Number(VIN)"
              id="vin"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.vinError}
            </div>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
        
        <Grid container style={useStyles.grid}>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8}  style={useStyles.InputWidth} >
            <Input
              style={useStyles.InputWidth}
              placeholder="Year"
              id="year"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.yearError}
            </div>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
        <Grid container style={useStyles.grid}>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8} style={useStyles.InputWidth} >
            <Input
              style={useStyles.InputWidth}
              placeholder="Make"
              id="make"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.makeError}
            </div>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
        <Grid container style={useStyles.grid}>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8} style={useStyles.InputWidth}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Model"
              id="model"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.genderError}
            </div>
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
        <Grid container>
          {/* <Grid sm={2} /> */}
          <Grid xs={12} sm={8}> 
          <Link to="/vehicledetails"><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.submitHandler}>
              Add
            </Button></Link>
            {/* // </div>
        //</div> */}
          </Grid>
          {/* <Grid sm={2} /> */}
        </Grid>
      </form>
<br/><br/><br/><br/></div>
    );
  }
}


const mapStateToProps = state => state => {
  console.log("Add Vehicles quote state on click"+JSON.stringify(state.quote.drivers))
  return {
    "quote": state.quote,
      };
};

export default connect(
  mapStateToProps,
  { setQuoteObject }
)(AddVehicle);

