import React from 'react';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container, Paper,Card, CardHeader,Avatar,CardContent} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import SimpleCard from "../../SharedJSX/Inputs/VerticalCard/VerticalCard";
import path from "../../assets/carlogo.png";
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
    this.state= {
        quotes:[],
        policies:[],
        listToDisplay:[],
        headerToDisplay:[],
        textToDisplay: null,
        policyAvaialble: false,
        isLoaded : false
    }
  }  

  async componentDidMount() {
   await   fetch('https://umb-spring-datapi.herokuapp.com/myaccounts')
      .then(res => res.json())
      .then(json => {
          this.setState({
              isLoaded: true,
              quotes: json.filter(quote => quote.type === 'quote'),
              policies: json.filter(quote => quote.type === 'policy')
          })
          if(this.state.policies && this.state.policies.length > 0) {
            this.setState({listToDisplay : this.state.policies,headerToDisplay:policyHeader,textToDisplay:"Policies",policyAvaialble:true})
          }
          else{
            this.setState({listToDisplay : this.state.quotes,headerToDisplay:quoteHeader,textToDisplay:"Quotes",policyAvaialble:false})
          }          
      })
  }

render(){    
    
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
                Auto Insurance {this.state.textToDisplay}
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
                        <TableCell align='left'>{quote.id}</TableCell>
                        <TableCell align='left'>{quote.location}</TableCell>
                        <TableCell align='left'>{quote.monthlyPremium}</TableCell>
                        <TableCell align="left">
                            <Link to='/quoteresults' ><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Continue</Button></Link>
                        </TableCell>
                    </TableRow>        
                    )})}
                </TableBody>
                </Table>
            </Grid>  
            :<div>{this.state.listToDisplay.map((quote, index) => {
                    var a = "Your " +quote.location+" Policy"
                return(
                <Card square elevation={4}>  
                    <CardHeader title={a}titleTypographyProps={{variant:"h6", align:"left", component:"p"}} subheader="Effective from November 11, 2018" subheaderTypographyProps={{variant:"subtitle1", align:"left",component:"p"}}
                    avatar={
                        <Avatar aria-label="location" style={{backgroundColor:"#041c3d"}}>
                          {quote.location}
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
                            <Grid>
                                <SimpleCard
                                type="driver"
                                showDeleteButton={true}
                                id={"2"}
                                image={"https://www.w3schools.com/howto/img_avatar.png"}
                                milteryStatus={"active"}
                                name={"dharma"}
                                model={"0H0002345"}
                                data={"Age 21"}
                                />
                            </Grid>
                            <Grid>
                                    <SimpleCard
                                    type="driver"
                                    showDeleteButton={true}
                                    id={"2"}
                                    image={"https://www.w3schools.com/howto/img_avatar.png"}
                                    milteryStatus={"active"}
                                    name={"dharma"}
                                    model={"0H0002345"}
                                    data={"Age 21"}
                                    />
                            </Grid>
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
                            <Grid>
                                <SimpleCard
                                key={"1"}
                                type="vehicle"
                                showDeleteButton={true}
                                id={"djjhfkjhdjkfhk"}
                                image={path}
                                model={"10000 miles"}
                                name={"dharma"}
                                milteryStatus={"2016 Tesla 3"}
                                data={"17DHFUE5678DHDBHD"}
                                />
                            </Grid>
                            <Grid>
                                    <SimpleCard
                                    key={"1"}
                                    type="vehicle"
                                    showDeleteButton={true}
                                    id={"djjhfkjhdjkfhk"}
                                    image={path}
                                    model={"10000 miles"}
                                    name={"dharma"}
                                    milteryStatus={"2016 Tesla 3"}
                                    data={"17DHFUE5678DHDBHD"}
                                    />
                            </Grid>
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
export default QuoteHistory;
