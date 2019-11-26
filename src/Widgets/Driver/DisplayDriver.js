import React from "react";
import { connect } from "react-redux";
import "./stylequoteresults.css";
import history from '../../utils/history'
import Paper from "@material-ui/core/Paper";
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const useStyles = {
  root: {
    width: "auto",
    height: "auto",
    backgroundColor: "#f4f4f4"
  },
  aligning: {
    display: "inline-block",
    padding: 10
  }
};

class DisplayDriver extends React.Component {
  
  onAddDriverClick = () => {
    history.push('/adddriver')
  } 
  
  render() {
    let showDeleteButton = true;
    let milteryStatus="Major"
    return (
      <div className="driverinfo">
        {this.props.quote.drivers.map((driver, index) => {
            if (index === 0) {
                showDeleteButton = true;
            } else {
                showDeleteButton = true;
            }
          let image = "";

<<<<<<< HEAD
          var fullname = driver.name.split(" "); 

          if(fullname.length > 1){            
            var firstLastName = fullname[0] + " " + fullname[fullname.length - 1];
          }else
          {            
            var firstLastName = fullname ;
          }
          

=======
          var fullname = driver.name.split(" ");
          var firstLastName = fullname[0] + " " + fullname[fullname.length - 1];
          console.log("fn ln"+firstLastName)
>>>>>>> 047d726cf9bba9d9afbf9593b754cf1ee3b19096
          if ((driver.gender == "Male") || (driver.gender == "male") || (driver.gender == "M") || (driver.gender == "M") || (driver.gender == "MALE")){
            image = "https://www.w3schools.com/howto/img_avatar.png";
          } else if ((driver.gender == "Female")|| (driver.gender == "female") || (driver.gender == "F") || (driver.gender == "f") || (driver.gender == "FEMALE")){
            image = "https://www.w3schools.com/howto/img_avatar2.png";
          } else{
            image = require("../../assets/nogenavatar.jpg")
          }

          return (
            <span key={index}>
              <div style={useStyles.aligning}>
                <SimpleCard
                  type="driver"
                  showDeleteButton={this.props.quote.drivers.length > 1}
                  id={driver.id}
                  image={image}
                  milteryStatus={milteryStatus}
                  name={firstLastName}
                  model={driver.license ? driver.license : "0H0002345"}
                  data={driver.age ? driver.age : "Age 21"}
                  index={index}
                />
              </div>
              
            </span>
          );
        })}
          <Fab color="primary" aria-label="add">
            <AddIcon onClick={this.onAddDriverClick} />
          </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Display Driver",JSON.stringify(state.quote))
  return {
 
    "quote": state.quote,
  };
};
export default connect(mapStateToProps,  null)(DisplayDriver);
