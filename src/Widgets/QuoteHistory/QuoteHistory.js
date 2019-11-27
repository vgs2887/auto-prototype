import React from 'react';
import {Switch,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container, Paper,Card, CardHeader,Avatar,CardContent} from '@material-ui/core';
import Header from '../../Widgets/Header/Header'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
import path from "../../assets/carlogo.png";
import { connect } from "react-redux";
import axios from 'axios'
import { setQuoteObject } from "../../actions";
import history from "../../utils/history";
import {determineStateCodes} from "./DetState"
const useStyles = {
    root: {
        width: 'auto', 
        height: 'auto',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 3px rgba(0,0,0,0.12)'
    },
    leftAlign: {
        align: 'left'
    }   
};
const date = new Date()

const emptyObject ={
    "baseLocation": null, 
    "premium": 70,
    "policyId" : null, 
    "packageCode": null, 
    "policyNumber": null, 
    "isQuote": true, 
    "policyEffDate": date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate(), 
    "policyExpDate": null, 
    "lastVisitedPage": null,
    "coverages": {
                    "bodilyInjury": null, 
                    "propertyDamage": null, 
                    "comprehensive": null, 
                    "collision": null
                },
    "drivers": [
                {
                    "name": "Jenny Doe", 
                    "age": 29, 
                    "relationship": "SELF", 
                    "gender": "female", 
                    "license": "OH00000001"
                }
    ],
    "vehicles": [
        {
            "driverName": "Jenny Doe",
            "year": 2018,
            "make": "Honda",
            "model": "Civic",
            "vin": "HODHFOAHDLASDOI",
            "mileage": 130000,
            "addressLineOne": "4980 usaa blvd",
            "addressLineTwo": "apt9999",
            "city": "San Antonio",
            "state": "Texas",
            "zip": "78240"
          },
    ]
    };
const policyHeader = ['Policy#','Location','Premium'];
const quoteHeader = ['Quote Desc','State','Premium'];
class QuoteHistory extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
        aggregate:[],
        quotes:[],
        policies:[],
        listToDisplay : [],
        headerToDisplay: [],
        textToDisplayPolicy: null,
        textToDisplay: null,
        textToDisplayQuote: null,
        policyAvaialble: false,
        togglePolicy:false,
        quoteAvaialble: false,
        isEmpty: true ,
        canDisplayGetStarted:false       
    }

  }  

  componentDidMount() {    
    axios.get('https://bkjapch3s9.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policysummaryexpapi')
    .then(response => {    
        console.log(response.data)        
            this.setState({
            isLoaded: true,
            aggregate:response.data,
            quotes: response.data.filter(quote => quote.isQuote),
            policies: response.data.filter(quote => !quote.isQuote)
            })            
            this.setState({textToDisplay:"Click the below button to get started!"})
            this.setState({canDisplayGetStarted:true})
            if(this.state.policies && this.state.policies.length > 0) {
                this.setState({policyAvaialble:true})
                this.setState({isEmpty:false})
                this.setState({togglePolicy:true})                                
                if(this.state.policies.length > 1)
                {
                   this.setState({textToDisplayPolicy:" Your Active Policies"})
                }
                else{
                    this.setState({textToDisplayPolicy:" Your Active Policy"})
                }
              }
            if(this.state.quotes && this.state.quotes.length > 0 )
            {
                this.setState({quoteAvaialble:true})
                this.setState({isEmpty:false})   
                if(this.state.quotes.length > 1)
                {
                   this.setState({textToDisplayQuote:" Your Saved Quotes"})
                }
                else{
                    this.setState({textToDisplayQuote:" Your Saved Quote"})
                }             
            }           
          })    
      .catch(error =>{console.log("ERROR"+error)})
  }
  setQuoteDataInState = quote => {
    this.props.setQuoteObject(emptyObject) 
    console.log("dharma"+JSON.stringify(quote)) 
    axios.get('https://bkjapch3s9.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policysummaryexpapi/'+quote.policyId)
    .then(qte => {    
        console.log("Original quote Data in session--- "+JSON.stringify(qte.data))                                                
                    this.props.setQuoteObject(qte.data) 
                    })                          
  };

render(){    
  return (               
        <div style={{backgroundColor:'#F5F5F5'}}>            
            <Typography variant="h6" align="left" style={{color:'#041c3d'}}>
                
                {this.state.isEmpty ? null : this.state.policyAvaialble? <div style={{float:'right',fontSize:'10px',fontWeight:'bold'}}>Quotes<Switch size="small" style={{color:'#041c3d'}} color="primary" checked={this.state.togglePolicy} onChange={()=>{this.setState({togglePolicy:!this.state.togglePolicy})}}/>Policies</div>:""}
            </Typography> 
            <br />   
            <Typography variant="h6" align="left" style={{color:'#041c3d'}}>
                {!this.state.togglePolicy && this.state.quoteAvaialble ? this.state.textToDisplayQuote : this.state.togglePolicy && this.state.policyAvaialble ? this.state.textToDisplayPolicy:this.state.textToDisplay}
            </Typography>
            <br /> 
            { !this.state.togglePolicy && this.state.quoteAvaialble ?
            <Grid style={useStyles.root}>
                <Table size="small">
                    <TableHead>
                    <TableRow >
                        {quoteHeader.map((header)=>{return(
                            <TableCell align='left' style={{color:'#041c3d',fontWeight:'bold',paddingLeft:'5px',paddingRight:'5px'}}>{header}</TableCell>
                        )})}                        
                        <TableCell align='left'></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.quotes.map((quote, index) => {

                    return(

                    <TableRow>
                        <TableCell align='left' style={{paddingLeft:'5px',paddingRight:'5px'}}>{quote.lastVisitedPage?"Quote Saved on "+quote.lastVisitedPage : "Auto Insurance Quote"}</TableCell>
                        <TableCell align='left' style={{paddingLeft:'5px',paddingRight:'5px'}}>{determineStateCodes(quote.baseLocation)}</TableCell>
                        <TableCell align='left' style={{paddingLeft:'5px',paddingRight:'5px'}}>{quote.premium}</TableCell>
                        <TableCell align="left" style={{paddingLeft:'5px',paddingRight:'5px'}}>                    
                            <Link key={quote.policyNumber} to={"/"+quote.lastVisitedPage} onClick={()=> this.setQuoteDataInState(quote)}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Continue</Button></Link>
                        </TableCell>
                    </TableRow>        
                    )})}
                </TableBody>
                </Table>
            </Grid>  
            :<div>{this.state.togglePolicy && this.state.policyAvaialble ? this.state.policies.map((quote, index) => {
                    var a = "Your " +determineStateCodes(quote.baseLocation)+" Policy" + "   #" + quote.policyNumber
                    var driverid = 0;
                    var vehicleid = 0;
                    var effectiveDatemsg = "Effective from "+new Date(quote.policyEffDate).toLocaleDateString([],{ year: 'numeric', month: 'long', day: 'numeric' })
                return(
                <Card square elevation={4}>  
                    <CardHeader title={a}titleTypographyProps={{variant:"h6", align:"left", component:"p"}} subheader={effectiveDatemsg} subheaderTypographyProps={{variant:"subtitle1", align:"left",component:"p"}}
                    avatar={
                        <Avatar aria-label="location" style={{backgroundColor:"#041c3d"}}>
                          {determineStateCodes(quote.baseLocation)}
                        </Avatar>
                      }/>
                    <CardContent>     
                    <ExpansionPanel square>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        > <Typography variant="caption" style={{
                            color:"#041c3d",fontWeight:"bold"
                          }}>Drivers</Typography>
                          </ExpansionPanelSummary>    
                        <ExpansionPanelDetails>                                                   
                        <Grid container>
                            {quote.drivers.map((driver,index) =>{return(
                                    <Grid>
                                    <SimpleCard
                                    type="driver"
                                    showDeleteButton={false}
                                    id={driverid+1}
                                    image={"https://www.w3schools.com/howto/img_avatar.png"}
                                    milteryStatus={"active"}
                                    name={driver.name}
                                    model={driver.license}
                                    data={driver.age}
                                    />
                                </Grid>
                            )})}
                        </Grid>
                        </ExpansionPanelDetails>
                        </ExpansionPanel >
                        <ExpansionPanel square>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        > <Typography variant="caption" style={{
                            color:"#041c3d",fontWeight:"bold"
                          }}>Vehicles</Typography>
                          </ExpansionPanelSummary>    
                        <ExpansionPanelDetails>                                                   
                        <Grid container>
                            {quote.vehicles.map((vehicle,index) =>{return(
                                        <Grid>
                                        <SimpleCard                                        
                                        key={vehicleid+1}
                                        type="vehicle"
                                        showDeleteButton={false}
                                        id={vehicleid+1}
                                        image={path}
                                        model={vehicle.mileage}
                                        name={vehicle.driverName}
                                        milteryStatus={vehicle.year+vehicle.make+vehicle.model}
                                        data={vehicle.vin}
                                        />
                                    </Grid>
                                )})}                            
                        </Grid>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        > <Typography variant="caption" style={{
                            color:"#041c3d",fontWeight:"bold"
                          }}>Coverages</Typography>
                          </ExpansionPanelSummary>    
                        <ExpansionPanelDetails>                                                   
                        <Grid container>
                        <Table size="small">
                        <TableHead><TableRow><TableCell align='left'>Coverages</TableCell><TableCell align='left'>Premium</TableCell></TableRow></TableHead>
                        <TableBody>
                            {quote.coverages.bodilyInjury ? <TableRow><TableCell align='left'>Bodily Injury</TableCell><TableCell align='left'>{quote.coverages.bodilyInjury}</TableCell></TableRow> : <span></span>}
                            {quote.coverages.propertyDamage ? <TableRow><TableCell align='left'>Property Damage</TableCell><TableCell align='left'>{quote.coverages.propertyDamage}</TableCell></TableRow> : <span></span>}
                            {quote.coverages.comprehensive ? <TableRow><TableCell align='left'>Comprehensive</TableCell><TableCell align='left'>{quote.coverages.comprehensive}</TableCell></TableRow> : <span></span>}
                            {quote.coverages.collision ? <TableRow><TableCell align='left'>Collision</TableCell><TableCell align='left'>{quote.coverages.collision}</TableCell></TableRow> : <span></span>}
                        </TableBody>
                        </Table>
                        </Grid>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>                    
                    </CardContent>
                </Card>)}):""}
            </div>}
<br />
<br/> 
{this.state.canDisplayGetStarted && !this.state.togglePolicy ? <Link align="left" to='/getstarted' onClick={()=>this.props.setQuoteObject(emptyObject)}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>
                                Get A New Quote
                        </Button></Link> :"" }
<br/><br/><br/><br/></div>
  );
}
}
const mapStateToProps = (state) => {
    console.log("quote state on click"+state.quote)
    return {        
        "quote": state.quote
    }
}
export default connect(mapStateToProps,{ setQuoteObject })(QuoteHistory)