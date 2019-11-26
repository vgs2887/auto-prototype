import React from "react";
import { connect } from "react-redux";
import "./stylequoteresults.css";
import Paper from "@material-ui/core/Paper";
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
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
  render() {
    let showDeleteButton = true;
    let milteryStatus="Major"
    console.log(milteryStatus)
    return (
      <div className="driverinfo">
        {this.props.drivers.map((driver, index) => {
            if (index === 0) {
                showDeleteButton = true;
            } else {
                showDeleteButton = true;
            }
          let image = "";
          var fullname = driver.name.split(" ");

          if(fullname.length > 1){            
            var firstLastName = fullname[0] + " " + fullname[fullname.length - 1];
          }else
          {            
            var firstLastName = fullname ;
          }
          

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
                  showDeleteButton={false}
                  id={driver.id}
                  image={image}
                  milteryStatus={"Major"}
                  name={firstLastName}
                  model={driver.license ? driver.license : "0H0002345"}
                  data={driver.age ? driver.age : "Age 21"}
                />
              </div>
              
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //drivers: Object.values(state.drivers)
    drivers: state.quote.drivers
  };
};
export default connect(mapStateToProps,  null)(DisplayDriver);
