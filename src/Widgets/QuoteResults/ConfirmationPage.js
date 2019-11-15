import React from "react";
import $ from "jquery";
import { connect } from 'react-redux'
import "./styleconfirmation.css";
import QuoteResultsPage from "./QuoteResultsPage";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





const useStyles = {
  root: {
      flexGrow: 1,
      flexDirection: 'row'
  },
  paper: {
      textAlign: 'center',
  },
}

export default class ConfirmationPage extends React.Component {




  componentDidMount() {
    $("button").click(function() {
      $(".check-icon").hide();
      setTimeout(function() {
        $(".check-icon").show();
      }, 0);
    });
  }

  render() {
    return (
      <div className="confirmcss">
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        
        <div className="pol-issued">Thank you Major Alex, Your Auto policy has been processed. A confirmation and follow up steps are sent to your registered email address.</div>        
        <div style={useStyles.root}>
            <Card className = "conf-box" style={{flex: 1, flexDirection: 'row'}}>
      
            <CardContent>
                <div>
                    <ul><Typography variant="body2" color="textSecondary" component="p">
                    Thank you Major Alex, Your Auto policy has been processed. A confirmation and follow up steps are sent to your registered email address.
                        </Typography>
                    </ul>
                    <Card className = "id-details" style={{flex: 1, flexDirection: 'row'}}>
                    <div className = "top-row">
                    <div className = "item">
                    <ul className = "top-column">Policy Number</ul>
                    <ul className = "bottom-column">00000001</ul>
                    </div>
                    <div className = "item">
                    <ul className = "top-column">Effective Date</ul>
                    <ul className = "bottom-column">11/15/2019</ul>
                    </div>
                    <div className = "item">
                    <ul className = "top-column">Expiration Date</ul>
                    <ul className = "bottom-column">05/15/2020</ul>
                    </div>
                    
                    </div>
                    <div className = "bottom-row">
                    <ul className = "Policy-Owner">Policy Owner</ul>
                    </div>

                                  
                    </Card>

                    
                        <ExpansionPanel className = "vehicle-expansion-panel">
                            <ExpansionPanelSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography  > <img src={require("../../assets/car.png")}  width="25px"/> Vehicles</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            <div className = "top-row">
                            <img src = {require( "../../assets/carlogo.png")} width = "100px" className ="vehicle-pic"/>

                              <div className = "item">
                              <ul className = "top-column">Year</ul>
                              <ul className = "bottom-column">2019</ul>
                              </div>
                              <div className = "item">
                              <ul className = "top-column">Make</ul>
                              <ul className = "bottom-column">Tesla</ul>
                              </div>
                              <div className = "item">
                              <ul className = "top-column">Model</ul>
                              <ul className = "bottom-column">3</ul>
                              </div>
                            </div>
                          </Typography>
                        </ExpansionPanelDetails>  
                        </ExpansionPanel>

                        <ExpansionPanel className = "drivers-expansion-panel">
                            <ExpansionPanelSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography  ><img src={require("../../assets/car-driver.png")}  width="25px"/> Drivers</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                          <div className = "top-row">
                            <img src = "https://www.w3schools.com/howto/img_avatar.png" width = "75px" className ="vehicle-pic"/>

                              <div className = "item">
                              <ul className = "top-column">Name</ul>
                              <ul className = "bottom-column">Major Alex</ul>
                              </div>
                              <div className = "item">
                              <ul className = "top-column">Age</ul>
                              <ul className = "bottom-column">34</ul>
                              </div>
                              <div className = "item">
                              <ul className = "top-column">License Number</ul>
                              <ul className = "bottom-column">OH0000002</ul>
                              </div>
                            </div>
                          </Typography>
                        </ExpansionPanelDetails>  
                        </ExpansionPanel>

                        <ExpansionPanel className = "coverages-expansion-panel">
                            <ExpansionPanelSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography  ><img src={require("../../assets/umb.jpg")}  width="25px"/> Coverages</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>

                            <div className = "coverages-column">
                            <div className = "coverages-row">
                            <ul>Bodily Injury Liability Coverage</ul>
                            <ul>$1,000,000</ul>
                            </div>
                            <div className = "coverages-row">
                            <ul>Property Damage Liability Coverage</ul>
                            <ul>$10,000</ul>
                            </div>
                            <div className = "coverages-row">
                            <ul>Comprehensive</ul>
                            <ul>$100</ul>
                            </div>
                            <div className = "coverages-row">
                            <ul>Collision</ul>
                            <ul>$0</ul>
                            </div>
                            </div>
                          </Typography>
                        </ExpansionPanelDetails>  
                        </ExpansionPanel>
                    
                </div>

            </CardContent>
            
            </Card>
        </div>
        

</div>

      
    );
  }
}
