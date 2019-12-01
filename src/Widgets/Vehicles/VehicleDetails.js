import React from 'react'
import history from '../../utils/history'
import DisplayVehicle from './DisplayVehicle'
import './stylequoteresults.css'
import {Divider,Paper,Grid} from '@material-ui/core';
import path from '../../assets/car.png'
import { connect } from 'react-redux';
import Header from '../../Widgets/Header/Header'
import {Button} from '@material-ui/core';
import { setQuoteObject ,deleteVehicleFromQuote} from "../../actions";
import { Widget,addResponseMessage,dropMessages, addLinkSnippet, addUserMessage ,renderCustomComponent} from 'react-chat-widget';
import ReactDOM from "react-dom";
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
    
    constructor(props)
    {
        super(props)
        this.state = {
            showChat : false,
            chatContext:null
        }
    }
    goToNextPage = () => {
        dropMessages()
        quote={...this.props.quote};
        // console.log("Arun Testing ",quote);
        quote.lastVisitedPage="quoteresults";
        // console.log("Arun Testing ",quote);
        this.props.setQuoteObject(quote);
        console.log("Vehicle Details postRequest:  "+JSON.stringify(quote));
        axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/'+this.props.quote.policyId, quote)
        .then(response => {console.log("Vehicle Details Response",response.data)})
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
    componentDidMount(){
        setTimeout(() => {
            this.setState({showChat: true,})   
        }, 5000)
        this.setupBeforeUnloadListener();        
        // renderCustomComponent(<VehicleAsButton/>,null,false)
     }
     handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        if(newMessage && (newMessage.toUpperCase().includes("ADD") && newMessage.toUpperCase().includes("VEH")))
        {
            addResponseMessage("Sure i will show you add a vehicle page where you can enter vehicle's details...");
            setTimeout(() => {
            ReactDOM.findDOMNode(this).querySelector('.rcw-widget-container .rcw-launcher .rcw-close-launcher').click() 
            history.push('/addvehicle')} , 1500)

        }
        if(newMessage && ((newMessage.toUpperCase().includes("DELETE")||newMessage.toUpperCase().includes("REMOVE")) && newMessage.toUpperCase().includes("VEH")))
        {
            if(this.props.quote.vehicles.length > 1)
            {
                // renderCustomComponent(<VehicleAsButton />,this.props,false)
                addResponseMessage("Sure i can help you remove the vehicle, Enter the vehicle's id you want to remove...") 
                this.setState({chatContext:"DELVEH"})                
                // ReactDOM.findDOMNode(this).querySelector('.rcw-widget-container .rcw-conversation-container .rcw-messages-container')
                // .append(this.buildDynamicChatButtons())
                var count =1
                this.props.quote.vehicles.map((vehicle,index) => {
                    addResponseMessage("Vehicleid - " + count + " - "+ vehicle.year + " " + vehicle.make + " "+vehicle.model)
                    count = count + 1
                })

            }
            else
            {   
                addResponseMessage("Sorry... Atleast one vehicle should be part of this quote. Add another vehicle to remove the current vehicle.")
            }       
        }
        if(this.state.chatContext === 'DELVEH')
        {
            if(!isNaN(newMessage))
            {
                if(parseInt(newMessage) <= this.props.quote.vehicles.length)
                { 
                    var count = 1
                    this.props.quote.vehicles.map((veh, index) => {
                        console.log(JSON.stringify(veh))                        
                        if(count === parseInt(newMessage))
                        {
                            setTimeout(() => {this.props.quote.vehicles.splice(index,1)
                            console.log("DDsdfhjkshdfkjhD printing inside delete vehicle click --- "+JSON.stringify(this.props.quote.vehicles))
                            this.props.deleteVehicleFromQuote(this.props.quote)
                            addResponseMessage("Done. Removed!")},1000)
                            this.setState({chatContext:null})
                        }
                        count= count +1
                    })
                }
                else{
                    addResponseMessage("Enter a valid vehicle id.")
                }
            }
            else
            {
                addResponseMessage("Enter a valid vehicle id.")
            }
        }

      }
    //   buildDynamicChatButtons = () => {
    //       var htmlElement = "&lt;div class=&quot;rcw-message&quot;&gt;&lt;div class=&quot;rcw-response&quot;&gt;&lt;div class=&quot;rcw-message-text&quot;&gt;"
    //       this.props.quote.vehicles.map((vehicle,index) => {
    //         htmlElement = htmlElement + "&lt;p&gt;"
    //         htmlElement = htmlElement + vehicle.year.toString()
    //         htmlElement = htmlElement + vehicle.make
    //         htmlElement = htmlElement + vehicle.model
    //         htmlElement = htmlElement + "&lt;/p&gt;"
    //       })
    //       htmlElement = htmlElement + "&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;"
    //       return htmlElement.toString();
    //   }
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
        return (
            <div style={{backgroundColor:'#F5F5F5'}}>   
            
            { this.state.showChat?  <Widget
                        handleNewUserMessage={this.handleNewUserMessage}          
                        showCloseButton={true}
                        fullScreenMode={false}
                        badge={0}
                        autofocus={true}
                        title="Ask TARS"
                        subtitle="Hey Jenny! I am Tars Your bot for today! Any help needed with vehicles? "
                        />:""}
            <Paper style={useStyles.root}>
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
export default connect(mapStateToProps,{ setQuoteObject,deleteVehicleFromQuote })(VehicleDetails)