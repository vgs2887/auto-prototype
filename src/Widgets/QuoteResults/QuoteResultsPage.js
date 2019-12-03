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
import { setPageNameAction,updatePremiumAndCoveragesAction } from "../../actions";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@material-ui/core';
import "./chatstyle.css"
import { Widget,addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import ReactDOM from "react-dom";
const useStyles = {
    root: {
        flexGrow: 1,
    },
    CommonDivWidth:
    {
    margin: '0 auto'},
    paper: {
        textAlign: 'center',
    },
    uLStyle:
    {
        left: '-20%',
        position: 'relative'

    },
    gridstyle:{
        marginLeft: '0px !important'
    }
}

class QuoteResultsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { premium: this.props.premium, pageName: '' };
        this.updatePremiumAndCoverages = this.updatePremiumAndCoverages.bind(this);
     }
    
  updatePremiumAndCoverages(ev){
      console.log("Vignesh Prints Event : "+ev)
    this.props.updatePremiumAndCoveragesAction(ev.target.value);
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
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        if(newMessage && ((newMessage.toUpperCase().includes("LOW") || newMessage.toUpperCase().includes("REDUCE") || newMessage.toUpperCase().includes("BETTER") )&&
        (newMessage.toUpperCase().includes("RATE") ||
        newMessage.toUpperCase().includes("COST") ||
        newMessage.toUpperCase().includes("COVERAGE") ||
        newMessage.toUpperCase().includes("PREMIUM"))))
        {
            addResponseMessage("Sure i can help you with better premium... can you tell the price range you are expecting?");
            this.setState({chatContext:"LOWPREM"})
        }
        
        if(this.state.chatContext === 'LOWPREM')
        {
            if(!isNaN(newMessage))
            {
                this.props.updatePremiumAndCoveragesAction(newMessage)
                this.setState({chatContext:null})
            }
            else
            {
                addResponseMessage("Enter a valid range from the recommendation.")
            }
        }

      }
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
    setTimeout(() => {
        this.setState({showChat: true,})   
    }, 5000)
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
            { this.state.showChat?  <Widget
          handleNewUserMessage={this.handleNewUserMessage}          
          showCloseButton={true}
          fullScreenMode={false}
          badge={0}
          autofocus={true}
          title="Ask TARS"
          subtitle="Hey Jenny! I am Tars Your bot for today! Any help needed with coverage/premium?"
        />:""}
            <Grid container spacing={3} style={useStyles.CommonDivWidth}>              
                <Grid item id="circualrgrid" style={{marginLeft:'0px !importatnt'}} xs={12}>
                  <CircularDiv premium={premium} quote={this.props.quote}/>
                </Grid>

                <Grid item xs={12}>
                <Link to={{pathname:'/payment'}}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.submitHandler}> Proceed to Checkout </Button></Link>
                </Grid>
                <Grid item xs={12}>
                    <input type="tel" maxlength="3" name='userEnteredPremium' className="user-entered-premium" onChange={this.updatePremiumAndCoverages} min='0'></input>
                </Grid>       
                <Grid item xs={12} sm={12}>
                <div class="scroll">
                <ul className="corousal" >
                            <li className="courosal-indicator">
                            <a  className={`${this.state.pageName === 'driver' && 'active'}`} style={{width:"200px"}} onClick={() => this.setComponent('driver')} href="#">
                            <img src={require("../../assets/car-driver.png")}  width="15px"/>Drivers</a></li>
                            <li className="courosal-indicator">
                            <a   className={`${this.state.pageName === 'vechicle' && 'active'}`}  onClick={() => this.setComponent('vechicle')} href="#">
                            <img src={require("../../assets/car.png")}  width="15px"/>Vehicles</a></li>
                            <li className="courosal-indicator">
                                <a className={`${this.state.pageName === 'coverage' && 'active'}`} onClick={() => this.setComponent('coverage')} href="#">
                                <img src={require("../../assets/car.png")} width="20px"/>Coverage</a>
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
        "quote": state.quote,
        userEnteredPremium : state.quote.userEnteredPremium

    }
}

export default connect(mapStateToProps, { setPageNameAction, updatePremiumAndCoveragesAction})(QuoteResultsPage)
