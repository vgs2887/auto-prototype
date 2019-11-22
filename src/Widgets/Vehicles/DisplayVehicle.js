import React from "react";
import { connect } from "react-redux";
import "./stylequoteresults.css";
import history from '../../utils/history'
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
import path from "../../assets/carlogo.png";
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

class DisplayVehicle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      didMount: false
    };
  }

  onAddVehicalClick=()=>{
    history.push('/Addvehicle')
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  render() {
    const { didMount } = this.state;
    // console.log(this.props)
    return (
      <div className={`Vehicalinfo fade-in ${didMount && "visible"}`}>
        {this.props.quote.vehicles.map((vehicle, index) => {
          // console.log('Arun typing '+vehicle.driverName);
            let vehName = "" + vehicle.year + " " + vehicle.make +  " " +vehicle.model; 
            // console.log('ss'+vehName);
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
                  name={vehicle.driverName}
                  milteryStatus={vehName}
                  data={vehVin}
                ></SimpleCard>
              </div>
            </span>
          );
        })}
        <Fab color="primary" aria-label="add">
            <AddIcon onClick={this.onAddVehicalClick} />
      </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("Display Vehicle quote state on click"+JSON.stringify(state.quote))
  return {
    "quote": state.quote,
      };
};
export default connect(
  mapStateToProps,
  null
)(DisplayVehicle);
