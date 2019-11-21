import React from "react";
import Input from "@material-ui/core/Input";
import ImageUploader from "react-images-upload";
import shortid from 'shortid';
import { connect } from "react-redux";
import { adddriveraction } from "../../actions";
import history from "../../utils/history";
import "./styleadddriver.css";
import path from "../../assets/car-driver.png";
import Grid from "@material-ui/core/Grid";
import "./styleadddriver.css";
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

class AddDriver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      username: "",
      age: "",
      relationship: "",
      gender: "",
      usernameError: "",
      ageError: "",
      relationshipError: "",
      genderError: ""
    };
    this.goBack = this.goBack.bind(this);
  }


  componentDidMount(){
    this.setState({ id: shortid.generate() });
  }
  changeHandler = e => {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else if (e.target.name === "age") {
      this.setState({ age: e.target.value });
    } else if (e.target.name === "relationship") {
      this.setState({ relationship: e.target.value });
    } else if (e.target.name === "gender") {
      this.setState({ gender: e.target.value });
    }
  };
  goBack = () => {
    history.push("/driverdetails");
  };

  validate = () => {
    let usernameError = "";
    let ageError = "";
    let relationshipError = "";
    let genderError = "";

    if (!this.state.username) {
      usernameError = "Name cannot be blank!!";
    }

    if (!this.state.age) {
      ageError = "age cannot be blank!!";
    } else if (this.state.age < 16 || this.state.age > 90) {
      ageError = "Age should be between 16 and 90";
    }

    if (!this.state.gender) {
      genderError = "gender cannot be blank!!";
    }

    if (!this.state.relationship) {
      relationshipError = "relationship cannot be blank!!";
    }

    if (usernameError || ageError || genderError || relationshipError) {
      this.setState({
        usernameError,
        ageError,
        genderError,
        relationshipError
      });
      return false;
    } else return true;
  };

  onAddDriverSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.adddriveraction(this.state);
      history.push("/driverdetails");
    }
  };

  onCancelClick = () => {
    history.push("/driverdetails");
  };

  render() {
    return (
      <form onSubmit={this.onAddDriverSubmit}>
        <AddHeader/>
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
              <span>Add New Driver</span>
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
              placeholder="Driver Name"
              name="username"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Age"
              name="age"
              type="number"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.ageError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Relationship"
              name="relationship"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.relationshipError}
            </div>
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Input
              style={useStyles.InputWidth}
              placeholder="Gender"
              name="gender"
              onChange={this.changeHandler}
            ></Input>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.genderError}
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
  { adddriveraction }
)(AddDriver);
