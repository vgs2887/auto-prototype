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
const emptyObject ={
    "quoteID": Math.round(Math.random()*(1000000 - 1) + 1),
    "baseLocation": null, 
    "premium": null, 
    "packageCode": null, 
    "policyNr": null, 
    "isQuote": true, 
    "policyEffDate": null, 
    "policyExpDate": null, 
    "coverages": {
                    "bodilyInjury": null, 
                    "propertyDamage": null, 
                    "comprehensive": null, 
                    "collision": null
                }, 
    "drivers": [],
    "vehicles": []
    };
const policyHeader = ['Policy#','Location','Premium'];
const quoteHeader = ['Quote#','State','Premium'];
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
        textToDisplay: null,
        policyAvaialble: false,
        isEmpty: false        
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
            if(this.state.policies && this.state.policies.length > 0) {
                if(this.state.policies.length > 1)
                {
                    this.setState({textToDisplay:"Auto Insurance Policies"})
                }
                else{
                    this.setState({textToDisplay:"Auto Insurance Policy"})
                }
                this.setState({listToDisplay:this.state.policies})
                this.setState({policyAvaialble:true})
                this.setState({headerToDisplay:policyHeader})
              }
              else{
                  if(this.state.quotes && this.state.quotes.length > 0 )
                  {
                    if(this.state.quotes.length > 1)
                    {
                        this.setState({textToDisplay:"Auto Insurance Quotes"})   
                    }
                    else{
                        this.setState({textToDisplay:"Auto Insurance Quote"})
                    }
                    this.setState({listToDisplay:this.state.quotes})
                    this.setState({policyAvaialble:false})  
                    this.setState({headerToDisplay:quoteHeader})                                      
                 } 
                else{
                        this.setState({isEmpty : true})
                        this.setState({textToDisplay:"Click Get Started to get a Quote!"})
                }
            }  
          })    
      .catch(error =>{console.log("ERROR"+error)})
  }
  setQuoteDataInState = quote => {
    console.log("dharma"+JSON.stringify(quote))
    this.props.setQuoteObject(quote)
  };

render(){    
    var list = this.state.listToDisplay
  return (      
        <div style={{backgroundColor:'#F5F5F5'}}>
             {/* <AppBar position="static" style={{backgroundColor:'#041c3d',color:'white'}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" align="center" display="inline">
                        My Accounts
                    </Typography>                                        
                </Toolbar>
            </AppBar>
            <br /> */}
            <Header headerText="My Accounts"/>
            <Typography variant="h6" align="left" style={{color:'#041c3d'}}>
                {this.state.isEmpty ? "Click Get Started to get a Quote!" : this.state.textToDisplay}
                {this.state.isEmpty ? null : <div style={{float:'right',paddingRight:'20px',fontSize:'10px',fontWeight:'bold'}}><Grid component="label" container alignItems="center" spacing={1}><Grid item xs>Quotes</Grid><Grid item xs><Switch size="small" style={{color:'#041c3d'}} checked={this.state.policyAvaialble} onChange={()=>{this.setState({policyAvaialble:!this.state.policyAvaialble})}}/></Grid><Grid item>Policies</Grid></Grid></div>}
            </Typography> 
            <br />   
            { this.state.listToDisplay && this.state.listToDisplay.length > 0 && !this.state.policyAvaialble ?
            <Grid style={useStyles.root}>
                <Table size="small">
                    <TableHead>
                    <TableRow >
                        {this.state.headerToDisplay.map((header)=>{return(
                            <TableCell align='left' style={{color:'#041c3d'}}>{header}</TableCell>
                        )})}                        
                        <TableCell align='left'></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.listToDisplay.map((quote, index) => {

                    return(

                    <TableRow>
                        <TableCell align='left'>{quote.policyNumber}</TableCell>
                        <TableCell align='left'>{quote.baseLocation}</TableCell>
                        <TableCell align='left'>{quote.premium}</TableCell>
                        <TableCell align="left">
                            <Link key={quote.policyNumber} to='/quoteresults' onClick={()=> this.setQuoteDataInState(quote)}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Continue</Button></Link>
                        </TableCell>
                    </TableRow>        
                    )})}
                </TableBody>
                </Table>
            </Grid>  
            :<div>{this.state.listToDisplay.map((quote, index) => {
                    var a = "Your " +quote.baseLocation+" Policy" + "   #" + quote.policyNumber
                    var driverid = 0;
                    var vehicleid = 0;
                    var effectiveDatemsg = "Effective from "+new Date(quote.policyEffDate).toLocaleDateString([],{ year: 'numeric', month: 'long', day: 'numeric' })
                return(
                <Card square elevation={4}>  
                    <CardHeader title={a}titleTypographyProps={{variant:"h6", align:"left", component:"p"}} subheader={effectiveDatemsg} subheaderTypographyProps={{variant:"subtitle1", align:"left",component:"p"}}
                    avatar={
                        <Avatar aria-label="location" style={{backgroundColor:"#041c3d"}}>
                          {quote.baseLocation}
                        </Avatar>
                      }/>
                    <CardContent>     
                    <ExpansionPanel square>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        > <Typography variant="caption" className={{
                            color:"#041c3d",fontWeight:"bold"
                          }}>Drivers</Typography>
                          </ExpansionPanelSummary>    
                        <ExpansionPanelDetails>                                                   
                        <Grid container>
                            {quote.drivers.map((driver,index) =>{return(
                                    <Grid>
                                    <SimpleCard
                                    type="driver"
                                    showDeleteButton={true}
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
                        > <Typography variant="caption" className={{
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
                                        showDeleteButton={true}
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
                    </CardContent>
                </Card>)})}
            </div>} 
<br />
<br/> 
<Link align="left" to='/getstarted' onClick={()=>this.props.setQuoteObject(emptyObject)}><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>
                                Get A New Quote
                            </Button></Link> 
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
