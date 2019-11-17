import React from 'react';
import {Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

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
            this.setState({listToDisplay : this.state.policies,headerToDisplay:policyHeader,textToDisplay:"Policies"})
          }
          else{
            this.setState({listToDisplay : this.state.quotes,headerToDisplay:quoteHeader,textToDisplay:"Quotes"})
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
            { this.state.listToDisplay.map((quote, index) => { return( quote.type)}) ?
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
:<div></div>} 
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
