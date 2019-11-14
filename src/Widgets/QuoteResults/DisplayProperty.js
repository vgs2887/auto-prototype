import React from "react";
import { connect } from "react-redux";
import "./stylequoteresults.css";
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

class DisplayProperty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      didMount: false
    };
  }
  componentDidMount() {
    console.log("I am in there");
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  render() {
    const { didMount } = this.state;
    return (
      <div className={`Vehicalinfo fade-in ${didMount && "visible"}`}>
        {this.props.custproperties.map((custproperty, index) => {
          // let image = {path}
          return (
            <span>
              <div style={useStyles.aligning}>
                <SimpleCard
                  type="property"
                  showDeleteButton={true}
                  id={custproperty.id}
                  image="https://i.skyrock.net/9401/81469401/pics/3119194069_1_3_pwW0ScXM.jpg"
                  model={custproperty.apartment}
                  name={custproperty.city}
                  data={custproperty.state}
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
    custproperties: state.custproperties
  };
};

export default connect(
  mapStateToProps,
  null
)(DisplayProperty);
