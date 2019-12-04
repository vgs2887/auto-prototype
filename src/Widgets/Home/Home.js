import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Btn from '../../SharedJSX/Inputs/Button/Buttons';
import "./stylehome.css"
import {Button} from '@material-ui/core';
import { setQuoteObject } from "../../actions";
import history from '../../utils/history'
import { connect } from "react-redux";
import Header from '../../Widgets/Header/Header'
//
import { Card, CardContent, Typography } from "@material-ui/core";
import ZipQueryHandler from "../ZipAdd/ZipQueryHandler";
import ZipPlace from "../ZipAdd/ZipPlace";
import GoogleMap from "../ZipAdd/GoogleMap";
import {determineStateCodes} from ".././QuoteHistory/DetState"

import axios from 'axios'
//

const styles = {
  logo:
  {
    display: 'flex',
  },
  tag1:
  {
    display: 'flex',
    color: 'Navy',
    fontWeight: 'small',
    textAlign: 'center',
    marginLeft: '8%',
    margin: '0 auto',
    width: '250px'    
  },
  tag2:
  {
color:'Navy',
textAlign: 'center',
marginTop: '5%',
width: '500px',
margin: '0 auto',
},
  button:
  {
    marginLeft: '620px',
    marginTop: '-80px',
    margin: '0 auto',
  }
};

//const [stateCode, setStateCode] = React.useState("");

var baseLocationLocal;
// var baseLocation = "TX";
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseLocation: "TX"
    }
    
  }


  setDataOnState = () => {
    console.log("Abbinav in setData", baseLocationLocal)
     if(baseLocationLocal != null)
    {
      // this.props.quote.baseLocation = this.state.baseLocation      
      this.props.quote.lastVisitedPage = "driverdetails"
      this.props.quote.baseLocation = baseLocationLocal 
      console.log("before calling api"+ JSON.stringify(this.props.quote))
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi', this.props.quote)
        .then(response => {console.log("Response"+JSON.stringify(response.data)) 
        this.props.quote.policyNumber=response.data.policyNumber
        this.props.quote.policyId=response.data.policyId 
        console.log("dharma home before stroing in session"+ JSON.stringify(this.props.quote))
        this.props.setQuoteObject(this.props.quote) })
        .catch(error =>{console.log("ERROR"+error)})
        history.push('/driverdetails')

    }

    

  }

  
  render() {

    return (
      <div style={{backgroundColor:'#F5F5F5'}}>
      <Grid container spacing={1} >
        <Grid style={styles.tag1} item  direction="column" alignContent="flex-start">
          <p>Good Morning,<br/>

            <b>Major {this.props.quote.drivers[0].name}</b>          
            
            </p>
            <p >Enhance your protection with an Auto Insurance for greater peace of mind. Go ahead, click on get started to create a quote.</p>
        </Grid>

         <div  style={styles.tag2}>      
    <ZipQueryHandler
      render={data => (
           <card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Please enter your zip code to get started
            </Typography>
            <ZipPlace data={data} primarydriver={this.primarydriver}/> 
            {data.city && <GoogleMap lat={data.lat} lon={data.lon} />}    
            {baseLocationLocal=determineStateCodes(data.state)}
            
         
            {/* baseLocation = (data) => {
            this.setState((determineStateCodes(data.state)))
            } */}
          </CardContent>
          </card>
      )}
    />   
        </div>
        <Link className = "startedButton" align="left" to='/driverdetails' >
        <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}onClick={this.setDataOnState}> 
            Get Started
        </Button>  
        </Link>       
      </Grid>
      <br/>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("quote state on click in home"+state.quote)

  return {
      "quote": state.quote,
  };
};

export default connect(
  mapStateToProps,
  { setQuoteObject }
)(Home);