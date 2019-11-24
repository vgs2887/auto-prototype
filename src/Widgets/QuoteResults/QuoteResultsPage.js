import React from 'react'
import { connect } from 'react-redux'
// import history from "../../utils/history";
import DriverDetails from '../QuoteResults/DriverDetails'
import Header from '../../Widgets/Header/Header'
import CoveragePanel from './CoveragePanel';
import './stylequoteresults.css';
import VehicleDetails from './VehicleDetails';
import PropertyDetails from './PropertyDetails';
import { Grid } from '@material-ui/core';
import CircularDiv from './CircularDiv';
import { setPageNameAction } from "../../actions";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@material-ui/core';

const useStyles = {
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
}

const postData = { "policyId": "7b4ba338-0b66-11ea-a983-060ef1aaca49", "baseLocation": "TX", "premium": 1000.99, "packageCode": "QUOTE", "policyNumber": "7001", "isQuote": false, "policyEffDate": "2019-11-19", "policyExpDate": "2020-06-13", "lastVisitedPage": "Complete", "coverages": { "bodilyInjury": 50.11, "propertyDamage": 10.22, "comprehensive": 100.0, "collision": 400.99 }, "drivers": [{ "name": "Monica Feloola Geller", "age": 29, "relationship": "SELF", "gender": "female", "license": "OH00000001" }, { "name": "Regina Phelange", "age": 30, "relationship": "ROOMIE", "gender": "female", "license": "OH00000001" }], "vehicles": [{ "driverName": "Regina Phelange", "year": 2018, "make": "Honda", "model": "Civic", "vin": "HODHFOAHDLASDOI", "mileage": 130000, "addressLineOne": "4980 usaa blvd", "addressLineTwo": "apt9999", "city": "San Antonio", "state": "Texas", "zip": "78240" }, { "driverName": "Monica Feloola Geller", "year": 2017, "make": "Porshe", "model": "Civic", "vin": "HODHFOAHDLASDOI", "mileage": 120000, "addressLineOne": "4980 usaa blvd", "addressLineTwo": "home", "city": "San Antonio", "state": "Texas", "zip": "99999" }] };

class QuoteResultsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { premium: this.props.premium, pageName: '' };
    }


    submitHandler = e => {
        console.log("postRequest:  " + JSON.stringify(postData))
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi', postData)
            .then(response => { console.log("Response" + JSON.stringify(response)) })
            .catch(error => { console.log("ERROR" + error) })
    }

    // componentDidMount() {
    //     let premium = this.props.premium;
    //     if (premium == null) {
    //         premium = 70;
    //     }
    //     // alert('premium' +premium );
    //     if (this.props.driverNo) {
    //         premium = premium + (premium * 0.3 * this.props.driverNo)
    //     }
    //     if (this.props.vehiclesNo) {
    //         premium = premium + (premium * 0.5 * this.props.vehiclesNo)
    //     }
    //     this.setState({ premium: premium, pageName: this.props.pageName })

    // }


    // static getDerivedStateFromProps(nextProps, prevState) {
    //     //alert("in get der");
    //     if ((prevState.premium !== nextProps.premium)) {
    //         let premium = nextProps.premium;

    //         if (nextProps.driverNo) {
    //             premium = premium + (premium * 0.3 * nextProps.driverNo)
    //         }
    //         if (nextProps.vehiclesNo) {
    //             premium = premium + (premium * 0.5 * nextProps.vehiclesNo)
    //         }
    //         return {

    //             premium: premium
    //         };
    //     }
    //     return null;
    // }

    setComponent = (pageName) => {

        this.props.setPageNameAction(pageName);
        console.log("quote results page : setComponent set page name ..." + pageName);
        this.setState({ pageName: pageName, activeCls: '' })
    }

    getComponent = () => {
        switch (this.state.pageName) {
            case 'driver': return (<Grid item xs={12}><DriverDetails /></Grid>);
            case 'vechicle': return (<Grid item xs={12}><VehicleDetails /></Grid>);
            case 'property': return (<Grid item xs={12}><PropertyDetails /></Grid>);
            case 'coverage': return (<Grid item xs={12}><CoveragePanel /></Grid>);
            default: return (<Grid item xs={12}><CoveragePanel /></Grid>);
        }
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
    var premium = this.props.premium ;
    return (
        <div style={useStyles.root}>
            <Grid container spacing={3}>              
                <Grid item xs={12}>
                  <CircularDiv premium={premium}/>
                </Grid>

                <Grid item xs={12}>
                <Link to={{pathname:'/payment'}}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.submitHandler}> Proceed to Checkout </Button></Link>
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
                    <br />

                    <Grid item xs={12}>
                        {this.getComponent()}
                    </Grid>
                </Grid>

                <br /><br /><br /><br />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("QRRRRR premium", state.quote)
    return {
        //"premium": state.premium,
        "premium": state.quote.premium, 
        "driverNo": state.drivers.length,
        "vehiclesNo": state.vehicles.length,
        "pageName": state.pagename

    }
}
export default connect(mapStateToProps, { setPageNameAction })(QuoteResultsPage)
