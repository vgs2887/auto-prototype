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
    CommonDivWidth:
    {width:'40%', 
    margin: '0 auto'},
    paper: {
        textAlign: 'center',
    },
    uLStyle:
    {
        left: '-20%',
        position: 'relative'

    }
}

class QuoteResultsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { premium: this.props.premium, pageName: '' };
    }


    submitHandler = e => {
        console.log("postRequest:  " + JSON.stringify(this.props.quote))
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/'+this.props.quote.policyId, this.props.quote)
            .then(response => { console.log("Save on QR Response" + JSON.stringify(response.data)) })
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
componentDidMount(){
    this.setupBeforeUnloadListener();
}
doSomethingBeforeUnload = (ev) => {
   console.log("SEE YOU SOON WITH A NEW quote"+ JSON.stringify(this.props.quote))        
   axios.post("https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/"+this.props.quote.policyId, this.props.quote)
   .then(response => {console.log("Response"+response.data)})
   .catch(error =>{console.log("ERROR"+error)})
   return ev.returnValue="Are you sure want to exit?"
}
 setupBeforeUnloadListener = () => {
   window.addEventListener("beforeunload", (ev) => {
       ev.preventDefault();
       console.log("GOOD BYE")
       return this.doSomethingBeforeUnload(ev);
   });
};
render() {
    var premium = this.props.premium ;
    return (
        <div style={useStyles.root}>
            <Grid container spacing={3} style={useStyles.CommonDivWidth}>              
                <Grid item xs={12}>
                  <CircularDiv premium={premium}/>
                </Grid>

                <Grid item xs={12}>
                <Link to={{pathname:'/payment'}}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.submitHandler}> Proceed to Checkout </Button></Link>
                </Grid>

                <Grid item xs={12} sm={12}>
                <div class="scroll">
                <ul className="corousal" style={useStyles.uLStyle}>
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

                <br /><br />
                <Link align="left" to='/' onClick={this.submitHandler}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>
                                Save
                        </Button></Link>
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
        "pageName": state.pagename,
        "quote": state.quote

    }
}
export default connect(mapStateToProps, { setPageNameAction })(QuoteResultsPage)
