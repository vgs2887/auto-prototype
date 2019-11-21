import React from "react";
import $ from "jquery";
import { connect } from 'react-redux'
import "./styleconfirmation.css";
import QuoteResultsPage from "./QuoteResultsPage";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import DisplayDriver from './DisplayDriver'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PrintIcon from '@material-ui/icons/Print';



const useStyles = {
  root: {
      flexGrow: 1,
      flexDirection: 'row',
      
  },
  paper: {
      textAlign: 'center',
  },
}

export default class ConfirmationPage extends React.Component {

  constructor(props) {
    super(props);
    
    
  }



  componentDidMount() {
    $("button").click(function() {
      $(".check-icon").hide();
      setTimeout(function() {
        $(".check-icon").show();
      }, 0);
    });
  }

  render() {  
    console.log(this.props);
    return (
      <div className="confirmcss">
        {/* <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div> */}
        
        
        <div style={useStyles.root}>
            <Card className = "conf-box" style={{flex: 1, flexDirection: 'row', flexWrap: 'Wrap'}}>
      
            <CardContent>
                <div>
                    <ul><Typography variant="body2" color="textSecondary" component="p">
                    Thank you Major Alex, Your Auto policy has been processed. A confirmation and follow up steps are sent to your registered email address.
                        </Typography>
                    </ul>
                    <Card className = "id-details" style={{flex: 1, flexDirection: 'row', flexWrap: 'Wrap'}}>
                  <div class="row">
                      <div class="avatar-container">
                        <div class="photo">
                        <Typography  > <img src={require("../../assets/carlogo.png")} width = "100%" className = "vehicle-img"/> </Typography>
                        </div>
                      </div>
                    <div class="details-container" style={{flex: 1, flexDirection: 'row'}}>
                      <div class="content">
                        <h3>Joe Doe</h3>
                     <div className = "top-row">
                      <div className = "item">
                      <ul className = "top-column">Policy Number</ul>
                      <ul className = "bottom-column">00000001</ul>
                        </div>
                      <div className = "item">
                      <ul className = "top-column">Effective Date</ul>
                      <ul className = "bottom-column">11/15/2019</ul>
                      </div>

                    
                      </div>
                      
                      <div className = "top-row">
                      <div className = "item">
                      <ul className = "top-column">Expiration Date</ul>
                      <ul className = "bottom-column">05/15/2020</ul>
                        </div>
                      <div className = "item">
                      <ul className = "top-column">Vehicle</ul>
                      <ul className = "bottom-column">2016 Tesla 3</ul>
                      </div>

                    
                      </div>                                           

                    </div>
                </div>
              </div>
                                  
                    </Card>
                                           
                    
                </div>
                
            </CardContent>
            <Link to='/' ><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white',flex: 1, flexDirection: 'row', flexWrap: 'Wrap'}}>
                                View Your Policy
                </Button></Link>
            
            </Card>
        </div>
  
<br/><br/><br/><br/>      

</div>

      
    );
  }
}
