import React from 'react'
import { connect } from 'react-redux'
// import history from "../../utils/history";
import DriverDetails from '../QuoteResults/DriverDetails'
import Header from "./Header";
import CoveragePanel from './CoveragePanel';
import './stylequoteresults.css';
import VehicleDetails from './VehicleDetails';
import PropertyDetails from './PropertyDetails';
import { Grid } from '@material-ui/core';
import CircularDiv from './CircularDiv';
import { setPageNameAction } from "../../actions";
import { Link } from 'react-router-dom'
import axios from 'axios'

const useStyles = {
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
}

const postData ={
    "baseLocation": "KS", 
    "premium": 990.99, 
    "packageCode": "Expanded", 
    "policyNr": "701", 
    "isQuote": true, 
    "policyEffDate": "2019-12-14", 
    "policyExpDate": "2020-07-13", 
    "coverages": {
                    "bodilyInjury": 150.11, 
                    "propertyDamage": 20.22, 
                    "comprehensive": 200.0, 
                    "collision": 500.99
                }, 
    "drivers": [
                {
                    "name": "Alexa Doe", 
                    "age": 29, 
                    "relationship": "SELF", 
                    "gender": "female", 
                    "license": "OH00000001"
                }, 
                {
                    "name": "John Doe", 
                    "age": 30, 
                    "relationship": "PARTER", 
                    "gender": "male", 
                    "license": "OH00000001"
                }
               ],
    "vehicles": [
                    {
                        "driverName": "Bing", 
                        "year": 2018, 
                        "make": "Honda", 
                        "model": "Accord", 
                        "vin": "HODHFOALASDOI", 
                        "mileage": 130000, 
                        "addressLineOne": "4980 usaa blvd", 
                        "addressLineTwo": "apt9999", 
                        "city": "San Antonio", 
                        "state": "Texas", 
                        "zip": "78240"
                    }, 
                    {
                        "driverName": "John", 
                        "year": 2017, 
                        "make": "Honda", 
                        "model": "Fit", 
                        "vin": "HODHFOALASDOI", 
                        "mileage": 18000, 
                        "addressLineOne": "4980 usaa blvd", 
                        "addressLineTwo": "home", 
                        "city": "San Antonio", 
                        "state": "Texas", 
                        "zip": "99999"
                    }
                ]
    };

class QuoteResultsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { premium: 25, pageName : '' };
    }
    

    submitHandler = e => {
        console.log(postData)
        axios.post('https://bkjapch3s9.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policysummaryexpapi', postData)
        .then(response => {console.log("Response"+response)})
        .catch(error =>{console.log("ERROR"+error)})
    }

componentDidMount(){
    let premium = this.props.premium;
    if (this.props.driverNo) {
         premium = premium + (premium * 0.3 * this.props.driverNo)
     }
     if (this.props.vehiclesNo) {
         premium = premium + (premium * 0.5 * this.props.vehiclesNo)
     }
     this.setState({ premium: premium, pageName:this.props.pageName })
}
    

    static getDerivedStateFromProps(nextProps, prevState) {
    if ( (prevState.premium !== nextProps.premium)) {
        let premium = nextProps.premium;

        if (nextProps.driverNo) {
            premium = premium + (premium * 0.3 * nextProps.driverNo)
        }
        if (nextProps.vehiclesNo) {
            premium = premium + (premium * 0.5 * nextProps.vehiclesNo)
        }
        return {
            
            premium: premium
        };
    }
    return null;
}

setComponent = (pageName) => {

    this.props.setPageNameAction(pageName);
    console.log("quote results page : setComponent set page name ..." +pageName);
    this.setState({pageName: pageName, activeCls: ''})
}

getComponent = () => {
    switch(this.state.pageName){
        case 'driver' : return (<Grid item xs={12}><DriverDetails/></Grid>);
        case 'vechicle' : return (<Grid item xs={12}><VehicleDetails/></Grid>);
        case 'property' : return (<Grid item xs={12}><PropertyDetails/></Grid>);
        case 'coverage' : return (<Grid item xs={12}><CoveragePanel/></Grid>);
        default: return (<Grid item xs={12}><CoveragePanel/></Grid>);
    }
}

// paymentPage = () => {
//     history.push("/payment");
//   };

render() {
    return (
        <div style={useStyles.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Header title="Auto Insurance Quote" /><br />
                </Grid>

                <Grid item xs={12}>
                  <CircularDiv premium={this.state.premium}/>
                </Grid>

                <Grid item xs={12}>
                <Link to={{pathname:'/payment', state:{ premium: this.state.premium }}}><button className="add-driver" onClick={this.submitHandler}> Proceed to Checkout </button></Link>
                </Grid>

                <Grid item xs={12} sm={12}>
                <div class="scroll">
                <ul className="corousal">
                            <li className="courosal-indicator">
                            <a  className={`${this.state.pageName === 'driver' && 'active'}`} style={{width:"200px"}} onClick={() => this.setComponent('driver')} href="#">
                            <img src={require("../../assets/car-driver.png")}  width="15px"/>Drivers</a></li>
                            <li className="courosal-indicator">
                            <a   className={`${this.state.pageName === 'vechicle' && 'active'}`}  onClick={() => this.setComponent('vechicle')} href="#">
                            <img src={require("../../assets/car.png")}  width="15px"/>Vehicles</a></li>
                            <li className="courosal-indicator">
                                <a className={`${this.state.pageName === 'coverage' && 'active'}`} onClick={() => this.setComponent('coverage')} href="#">
                                <img src={require("../../assets/umb.jpg")} width="20px"/>Coverage</a>
                            </li>
                        </ul>
                        </div>
                </Grid>
                <br/>

                <Grid item xs={12}>
                    {this.getComponent()}
                </Grid>    
            </Grid>

        </div>
    )
}
}
const mapStateToProps = (state) => {
    console.log("premium"+state.premium)
    return {
        "premium": state.premium,
        "driverNo": state.drivers.length,
        "vehiclesNo": state.vehicles.length,
        "pageName": state.pagename

    }
}
export default connect(mapStateToProps,{setPageNameAction})(QuoteResultsPage)