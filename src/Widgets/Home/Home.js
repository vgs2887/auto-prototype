import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Btn from '../../SharedJSX/Inputs/Button/Buttons';
import "./stylehome.css"
import { setQuoteObject } from "../../actions";
import { connect } from "react-redux";
import Header from '../../Widgets/Header/Header'
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
  button:
  {
    marginLeft: '30px'
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
         

        <Grid style={styles.button} container direction="column" alignItems="center" alignContent="flex-start">
        <Link align="left" to='/driverdetails' onClick={this.setDataOnState}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>
                                Get Started
                            </Button></Link>
          {/* <Link style={{ textDecoration: 'none' }} to='/driverdetails'><Btn id="button2" variant="contained">Get Started</Btn></Link> */}
        </Grid>

      </Grid></div>
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

