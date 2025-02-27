import React from 'react'
import ReactDOM from "react-dom";
import history from '../../utils/history'
import DisplayDriver from './DisplayDriver'
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/car-driver.png'
import { connect } from 'react-redux';
import Header from '../../Widgets/Header/Header'
import {Button} from '@material-ui/core';
import axios from 'axios'
import "./chatstyle.css"
import { Widget,addResponseMessage, dropMessages,addLinkSnippet, addUserMessage } from 'react-chat-widget';
import { setQuoteObject ,deleteDriverFromQuote} from "../../actions";
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

class DriverDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            didMount: true,
            showChat:false,
            chatContext:null
        };
    }
    componentDidMount(){
        setTimeout(() => {
             this.setState({showChat: true,})   
         }, 5000)
         this.setupBeforeUnloadListener();
     }
     handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        if(newMessage && (newMessage.toUpperCase().includes("ADD") && newMessage.toUpperCase().includes("DRIVER")))
        {
            addResponseMessage("Sure i will show you add a driver page where you can enter driver's details...");
            setTimeout(() => {
            ReactDOM.findDOMNode(this).querySelector('.rcw-widget-container .rcw-launcher .rcw-close-launcher').click() 
            history.push('/adddriver')} , 1500)

        }
        if(newMessage && ((newMessage.toUpperCase().includes("DELETE")||newMessage.toUpperCase().includes("REMOVE")) && newMessage.toUpperCase().includes("DRIVER")))
        {
            if(this.props.quote.drivers.length > 1)
            {
                addResponseMessage("Sure i can help you remove the driver, Enter the driver's id you want to remove...") 
                this.setState({chatContext:"DELDR"})
                var count =1
                this.props.quote.drivers.map((driver,index) => {
                    addResponseMessage("Driverid - " + count + " - "+ driver.name)
                    count = count + 1
                })
            }
            else
            {   
                addResponseMessage("Sorry... Atleast one driver should be part of this quote. Add another driver to remove the current driver.")
            }       
        }
        if(this.state.chatContext === 'DELDR')
        {
            if(!isNaN(newMessage))
            {
                if (parseInt(newMessage) <= this.props.quote.drivers.length)
                {       var count = 1     
                        this.props.quote.drivers.map((driver, index) => {
                        if (count === parseInt(newMessage))
                        {
                            setTimeout(() => {this.props.quote.drivers.splice(index,1)
                            console.log("DDsdfhjkshdfkjhD printing inside delete driver click --- "+JSON.stringify(this.props.quote.drivers))
                            this.props.deleteDriverFromQuote(this.props.quote)
                            addResponseMessage("Done. Removed!")},1000)
                            this.setState({chatContext:null})
                        }
                        count = count + 1
                    
                    })
                }
                else{
                    addResponseMessage("Enter a valid driver id.")
                }
            }
            else
            {
                addResponseMessage("Enter a valid driver id.")
            }
        }

      }
    goToNextPage = () => {
        dropMessages()
        this.props.quote.lastVisitedPage ="vehicledetails"
        console.log("on clicko f next on driver page "+ JSON.stringify(this.props.quote))        
        axios.post("https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/"+this.props.quote.policyId, this.props.quote)
        .then(response => {console.log("Response on click of next on driver page",response.data)})
        .catch(error =>{console.log("ERROR"+error)})
        this.props.setQuoteObject(this.props.quote);
        history.push('/vehicledetails')
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
        const {didMount,showChat} = this.state
        return (
            <div style={{backgroundColor:'#F5F5F5'}}>
              { showChat?  <Widget
          handleNewUserMessage={this.handleNewUserMessage}          
          showCloseButton={true}
          fullScreenMode={false}
          badge={0}
          autofocus={true}
          title="Ask TARS"
          subtitle="Hey Jenny! I am Tars Your bot for today! Any help needed with drivers?"
        />:""}
            <Paper style={useStyles.root}>
                <div className={`drivers fade-in ${didMount && 'visible'}`}>
                <Grid container >
                <Grid item xs={1} style={useStyles.alignCenter}><img  style={useStyles.img} src={path} alt="icon"/></Grid>
                <Grid item xs={3} style={useStyles.alignCenter}>
                    <span className="drivertext"><b>Drivers</b></span>
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}/>
                 </Grid>
                </div>
                <Divider/>
                <DisplayDriver />
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
const mapStateToProps = (state) => {
    console.log("Updated state for quote " + JSON.stringify(state.quote))
    return {
        "quote":state.quote
    }
}
export default connect(mapStateToProps,{ setQuoteObject , deleteDriverFromQuote})(DriverDetails)