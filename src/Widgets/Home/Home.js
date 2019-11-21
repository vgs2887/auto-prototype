import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Btn from '../../SharedJSX/Inputs/Button/Buttons';
import "./stylehome.css"
import {Button} from '@material-ui/core';
import { setQuoteObject } from "../../actions";
import { connect } from "react-redux";
import Header from '../../Widgets/Header/Header'
//
import { Card, CardContent, Typography } from "@material-ui/core";
import ZipQueryHandler from "../ZipAdd/ZipQueryHandler";
import ZipPlace from "../ZipAdd/ZipPlace";
import GoogleMap from "../ZipAdd/GoogleMap";
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
    textAlign: 'left',
    marginLeft: '30px',
    marginTop: '135px',
    width: '250px'
  },
  tag2:
  {
color:'Navy',
textAlign: 'center',
marginLeft: '180px',
marginTop: '135px',
width: '500px'
},
  button:
  {
    marginLeft: '620px',
    marginTop: '-80px'
  }
};
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseLocation: "TX"
    }
  }
  setDataOnState = () => {
    this.props.quote.baseLocation = this.state.baseLocation
    this.props.setQuoteObject(this.props.quote)
  }
  render() {

    return (
      <div style={{backgroundColor:'#F5F5F5'}}><Header headerText="Auto Insurance Quote"/>
      <Grid container spacing={1} className="App" styles={{textAlign:"center"}}>
      {/*   <Grid style={styles.logo} item xs={9} sm={9} direction="column-reverse" alignItems="flex-end">
          <img src="https://content.usaa.com/mcontent/static_assets/Media/globalHeader-usaaLogo-2016.svg" alt="Usaa logo"/><br />
        </Grid> */}

        <Grid style={styles.tag1} item  direction="column" alignContent="flex-start">
          <p>Good Morning,<br/>

            <b>Major Alex</b>          
            
            </p>
            <p >Enhance your protection with an Auto Insurance for greater peace of mind. Go ahead, click on get started to create a quote.</p>
        </Grid>

         <Grid  style={styles.tag2}>      
    <ZipQueryHandler
      render={data => (
           <card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Please enter your zip code to get started
            </Typography>
            <ZipPlace data={data} /> 
            {data.city && <GoogleMap lat={data.lat} lon={data.lon} />}     
          </CardContent>
          </card>
      )}
    />   
        </Grid>
      </Grid>
      <Link align="left" to='/driverdetails' onClick={this.setDataOnState}>
        <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>
            Get Started
        </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      quote: state.quote,
  };
};

export default connect(
  mapStateToProps,
  { setQuoteObject }
)(Home);
