import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Btn from '../../SharedJSX/Inputs/Button/Buttons';
import "./stylehome.css"

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
    
  }

  render() {

    return (
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

          <Link style={{ textDecoration: 'none' }} to='/driverdetails'><Btn id="button2" variant="contained">Get Started</Btn></Link>
        </Grid>

      </Grid>
    );
  }
}


export default Home;
