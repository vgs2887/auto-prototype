import React from 'react'
import history from '../../utils/history'
import DisplayVehicle from './DisplayVehicle'
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/car.png'
import { connect } from 'react-redux';
import Header from '../../Widgets/Header/Header'
import {Button} from '@material-ui/core';
import { setQuoteObject } from "../../actions";
import axios from 'axios'

const useStyles = {
    root: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 3px rgba(0,0,0,0.12)'
    },
    alignCenter:
    {margin: '0 auto'},
    aligning:
    {
        display: 'inline-block',
        padding: 10,
    }
};
var quote;
class VehicleDetails  extends React.Component {
    
    goToNextPage = () => {
        quote={...this.props.quote};
        // console.log("Arun Testing ",quote);
        quote.lastVisitedPage="quoteresults";
        // console.log("Arun Testing ",quote);
        this.props.setQuoteObject(quote);
        console.log("Vehicle Details postRequest:  "+JSON.stringify(quote));
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/'+this.props.quote.policyId, quote)
        .then(response => {console.log("Vehicle Details Response",response)})
        .catch(error =>{console.log("Vehicle Details ERROR"+error)})
        history.push('/quoteresults')
    }
    onAddVehicalClick=()=>{
        // console.log("Payment Page postRequest:  "+JSON.stringify(this.props.quote))
        // axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi', this.props.quote)
        // .then(response => {console.log("Vehicle details Response"+JSON.stringify(response))})
        // .catch(error =>{console.log("Payment Page ERROR"+error)})
        history.push('/addvehicle')
    }

    render() {
        return (
            <div style={{backgroundColor:'#F5F5F5'}}>   <Paper style={useStyles.root}>
                <div className="drivers">
                <Grid container >
                <Grid item xs={1} style={useStyles.alignCenter}><img  style={useStyles.img} src={path} alt="icon"/></Grid>
                <Grid item xs={3} style={useStyles.alignCenter}>
                    <span className="drivertext"><b>Vehicles</b></span>
                    </Grid>
                    <Grid item xs={4}/>
                    {/* <Grid item xs={4}>
                        <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.onAddVehicalClick}>Add+</Button>
                    </Grid>        */}
                 </Grid>
                </div>
                <Divider/>
                <DisplayVehicle />
                <Grid container>
                    <Grid sm={2} />
                    <Grid xs={12} sm={12}>
                        <Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.goToNextPage}>NEXT</Button>
                    </Grid>
                    <Grid sm={2} />
                </Grid>
            </Paper>
<br/><br/><br/><br/></div>
            
        )
    }
}
const mapStateToProps = state => {
    console.log("Vehicle Details quote state on click"+JSON.stringify(state.quote))
    return {
      "quote": state.quote,
        };
  };
export default connect(mapStateToProps,{ setQuoteObject })(VehicleDetails)