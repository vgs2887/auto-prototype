import React from "react";
import Input from "@material-ui/core/Input";
import shortid from 'shortid';
import { connect } from "react-redux";
import { addpropertyaction } from "../../actions";
import history from "../../utils/history";
import "./styleaddproperty.css";
import path from "../../assets/car-driver.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddHeader from '../QuoteResults/AddHeader'

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
    width: "60%"
  },
  InputWidth_: {
    paddingLeft: "20%",
    width: "60%"
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

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      location: "",
      appartment: "",
      state: "",
      city: "",
      zipcode: ""
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount(){
    this.setState({ id: shortid.generate() });
  }

  changeHandler = e => {
    if (e.target.name === "location") {
      this.setState({ location: e.target.value });
    } else if (e.target.name === "appartment") {
      this.setState({ appartment: e.target.value });
    } else if (e.target.name === "state") {
      this.setState({ state: e.target.value });
    } else if (e.target.name === "city") {
      this.setState({ city: e.target.value });
    } else if (e.target.name === "zipcode") {
      this.setState({ zipcode: e.target.value });
    }
  };
  goBack = () => {
    history.push("/quoteresults");
  };

  validate = () => {
    let locatonError = "";
    let appartmentError = "";
    let stateError = "";
    let cityError = "";
    let zipcodeError = "";

    if (!this.state.location) {
      locatonError = "location cannot be blank!!";
    }

    if (!this.state.appartment) {
      appartmentError = "appartment cannot be blank!!";
    }
    if (!this.state.city) {
      cityError = "city cannot be blank!!";
    }

    if (!this.state.state) {
      stateError = "state cannot be blank!!";
    }

    if (!this.state.zipcode) {
      zipcodeError = "zipcode cannot be blank!!";
    }

    if (
      locatonError ||
      zipcodeError ||
      stateError ||
      cityError ||
      appartmentError
    ) {
      this.setState({
        locatonError,
        zipcodeError,
        stateError,
        cityError,
        appartmentError
      });
      return false;
    } else return true;
  };

  onAddPrppertySubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.addpropertyaction(this.state);
      history.push("/quoteresults");
    }
  };

  onCancelClick = () => {
    history.push("/quoteresults");
  };

  render() {
    return (
      <form onSubmit={this.onAddPrppertySubmit}>
        {/* <AddHeader/> */}
        <Grid container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <div style={useStyles.InputWidth_}>
              <span
                onClick={this.goBack}
                style={{ border: "none", float: "left" }}
              >
                <i class="fa fa-angle-left"></i>
              </span>
              <span>Add New Property</span>
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
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
          <Grid sm={2} />
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
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Location"
              name="location"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.locationError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Appartment"
              name="appartment"
              type="number"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.appartmentError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="City"
              name="city"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>{this.state.cityError}</div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="State"
              name="state"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.stateError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Zipcode"
              name="zipcode"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.zipcodeError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>

        <Grid container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <button className="add-driver" type="submit">
              Add
            </button>
            {/* // </div>
        //</div> */}
          </Grid>
          <Grid sm={2} />
        </Grid>
      </form>
    );
  }
}

export default connect(
  null,
  { addpropertyaction }
)(AddProperty);
