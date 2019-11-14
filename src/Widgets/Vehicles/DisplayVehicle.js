import React from "react";
import { connect } from "react-redux";
import "./stylequoteresults.css";
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
import path from "../../assets/carlogo.png";

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

class DisplayVehicle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      didMount: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  render() {
    const { didMount } = this.state;
    console.log(this.props)
    return (
      <div className={`Vehicalinfo fade-in ${didMount && "visible"}`}>
        {this.props.vehicles.map((vehicle, index) => {
          console.log('ss'+vehicle.primaryowner);
            let vehName = "" + vehicle.year + " " + vehicle.make +  " " +vehicle.model; 
            console.log('ss'+vehName);
            vehName = vehName.substring(0,12);
            let vehVin = vehicle.vin ;
            vehVin = (vehVin.length > 10)?  vehVin.substring(0,10) + "...": vehVin;

            return ( 
            <span>
              <div style={useStyles.aligning}>
                <SimpleCard
                  key={vehicle.id}
                  type="vehicle"
                  showDeleteButton={true}
                  id={vehicle.id}
                  image={path}
                  model={vehicle.miles ? vehicle.miles : "1000 miles"}
                  name={vehicle.primaryowner}
                  milteryStatus={vehName}
                  data={vehVin}
                ></SimpleCard>
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
    vehicles: state.vehicles
  };
};
export default connect(
  mapStateToProps,
  null
)(DisplayVehicle);
