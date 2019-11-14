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
            <Card className = "conf-box">
      
            <CardContent>
                <div>
                    <ul><Typography variant="body2" color="textSecondary" component="p">
                    Thank you Major Alex, Your Auto policy has been processed. A confirmation and follow up steps are sent to your registered email address.
                        </Typography>
                    </ul>
                    <Card className = "id-details" style={{flex: 1, flexDirection: 'row'}}>
                    <ul className = "Policy Owner">Policy Owner</ul>
                    <ul className = "Policy Owner">Policy Number</ul>
                    <ul className = "Policy Owner">Policy Period</ul>
                    <ul className = "Policy Owner">Total Premium</ul>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
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
