import React from 'react';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container, Paper,Card, CardHeader,Avatar,CardContent} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
import path from "../../assets/carlogo.png";
import { connect } from "react-redux";
import { setPolicyAgg } from "../../actions";
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
const policyHeader = ['Policy#','Location','Premium'];
const quoteHeader = ['Quote#','State','Premium'];
// const qotes =
// [
//     {
//         quoteNumber : 1,
//         baseLocation: 'TX',
//         effDate: '16 Nov 2019',
//         premium: '$48.98'
//     },
//     {
//         quoteNumber : 2,
//         baseLocation: 'TX',
//         effDate: '10 Nov 2019',
//         premium: '$48.98'
//     },
//     {
//         quoteNumber : 3,
//         baseLocation: 'TX',
//         effDate: '01 Nov 2019',
//         premium: '$48.98'
//     }
// ];

class QuoteHistory extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state = {
        aggregate : []
    }
  }  

  componentDidMount() {
      fetch('https://bkjapch3s9.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policysummaryexpapi')
      .then(res => res.json())
      .then(json => {
          json.map(a =>{this.props.setPolicyAgg(a)})    
      })
      .catch(error =>{console.log("ERROR"+error)})
  }

render(){    
    var quotes = this.props.aggregate.filter(quote => quote.isQuote)
    var policies = this.props.aggregate.filter(quote => !quote.isQuote)
    var listToDisplay = []
    var headerToDisplay = []
    var textToDisplay = null    
    var policyAvaialble = false
    if(policies && policies.length > 0) {
        listToDisplay = policies
        headerToDisplay=policyHeader
        if(policies.length > 1)
        {
            textToDisplay="Auto Insurance Policies"    
        }
        else{
            textToDisplay="Auto Insurance Policy"
        }
        policyAvaialble=true
      }
      else{
          if(quotes && quotes.length > 0 )
          {
            listToDisplay = quotes
            headerToDisplay=quoteHeader
            if(quotes.length > 1)
            {
                textToDisplay="Auto Insurance Quotes"    
            }
            else{
                textToDisplay="Auto Insurance Quote"
            }
            policyAvaialble=false
         } 
        else{
            textToDisplay="Click Get Started to get a Quote!"
        }
    }
    console.log("display policy"+listToDisplay)
  return (      
        <div style={{backgroundColor:'#F5F5F5'}}>
             <AppBar position="static" style={{backgroundColor:'#041c3d',color:'white'}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" align="center" display="inline">
                        My Accounts
                    </Typography>                    
                </Toolbar>
            </AppBar>
            <br />
            <Typography variant="h6" align="left" style={{color:'#041c3d'}}>
                {textToDisplay}
            </Typography> 
            <br />  
            { listToDisplay && listToDisplay.length > 0 && !policyAvaialble ?
            <Grid style={useStyles.root}>
                <Table size="small">
                    <TableHead>
                    <TableRow >
                        {headerToDisplay.map((header)=>{return(
                            <TableCell align='left' style={{color:'#041c3d'}}>{header}</TableCell>
                        )})}                        
                        <TableCell align='left'></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {listToDisplay.map((quote, index) => {

                    return(

                    <TableRow>
                        <TableCell align='left'>{quote.policyNr}</TableCell>
                        <TableCell align='left'>{quote.baseLocation}</TableCell>
                        <TableCell align='left'>{quote.premium}</TableCell>
                        <TableCell align="left">
                            <Link to='/quoteresults' ><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Continue</Button></Link>
                        </TableCell>
                    </TableRow>        
                    )})}
                </TableBody>
                </Table>
            </Grid>  
            :<div>{listToDisplay.map((quote, index) => {
                    var a = "Your " +quote.baseLocation+" Policy"
                    var driverid = 0;
                    var vehicleid = 0;
                return(
                <Card square elevation={4}>  
                    <CardHeader title={a}titleTypographyProps={{variant:"h6", align:"left", component:"p"}} subheader="Effective from November 11, 2018" subheaderTypographyProps={{variant:"subtitle1", align:"left",component:"p"}}
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
<Link align="left" to='/getstarted' ><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>
                                Get A New Quote
                            </Button></Link>
</div>
  );
}
}
const mapStateToProps = (state) => {
    return {        
        "aggregate": state.aggregate
    }
}
export default connect(mapStateToProps,{setPolicyAgg})(QuoteHistory)
