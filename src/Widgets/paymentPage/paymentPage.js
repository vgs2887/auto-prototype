import React, { useLayoutEffect } from "react";
import "./stylePaymentPage.css";
import { Link } from 'react-router-dom'
import DebitCard from "./DebitCard";
import Savings from "./Savings";
import Cheque from "./Cheque";
import CreditCard from "./CreditCard";
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Grid,Table,TableBody,TableCell,TableHead,TableRow,Button,AppBar,Toolbar,Typography,IconButton, Container, Paper,Card, CardHeader,Avatar,CardContent} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Boxy from './Boxy'


export default class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'none',
                  pay: 'none'
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  
    
  }
  

  handleChange(event) {
    // console.log("before",this.state.value);
    this.setState({value: event.target.value});
    // console.log(this.state.value);
  }
  handleChange2(event) {
    // console.log("before",this.state.pay);
    this.setState({pay: event.target.value});
    // console.log(this.state.pay);
  }

  render() {
      let h=this.props.location.state.premium;
      let k;
      h=parseFloat(h).toFixed(2);
      k=parseFloat(h*6).toFixed(2);      
    return (
      <div style={{backgroundColor:'#F5F5F5'}}>
           <div>
               <div>
                  <AppBar position="static" style={{backgroundColor:'#041c3d',color:'white'}}>
                    <Toolbar>
                      <IconButton edge="start" color="inherit" aria-label="menu">
                      <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" align="center" display="inline">
                          Payment Page
                      </Typography>                    
                    </Toolbar>
                  </AppBar>
               </div>
               <div>
                   <span>Your total Policy Premium is ${k}</span>
               </div>
               <div>
                 <form>
                 <  input type='radio' value='full' required name='payment'onChange={this.handleChange2}></input><span>Pay Full Premium</span><br></br>
                 <  input type='radio' value='monthly' name='payment' onChange={this.handleChange2}></input><span>Pay Monthly Installments</span><br></br>
                 </form>
               </div>
               <div>
                 {
                   this.state.pay === 'full' &&
                   <span>The total Amount to be paid is ${k}</span>
                 }
               </div>
               <div>
                 {
                   this.state.pay === 'monthly' &&
                   <div>
                   <div>The total Amount to be paid is ${h}</div>
                   <label> Installments </label>
                   < Boxy value={h} />
                   </div>
                  }
               </div>

                <form>
                  <label>Type of Payment </label>  
                  <select value={this.state.value} onChange={this.handleChange}>
                      <option value="none" selected disabled hidden>Select an Option</option>
                      <option value='Debit Card'>Debit Card</option>
                      <option value='Credit Card'>Credit Card</option>
                      <option value='Savings'>Savings</option>
                      <option value='Cheque'>Checkings</option>
                  </select>
                </form>
           </div>

           <div>
           
               {this.state.value === 'Debit Card' &&
               <DebitCard />
            }
            </div>
            <div>
           
               {this.state.value === 'Credit Card' &&
               <CreditCard />
            }
            </div>
            <div>
          
               {this.state.value === 'Savings' &&
               <Savings />
            }
            </div>
            <div>
           
               {this.state.value === 'Cheque' &&
               <Cheque />
            }
            </div>

            <div>
          <Link to="/quoteresults"><Button variant="contained" style={{backgroundColor:'grey',color:'white'}}>Back</Button></Link>{' '}
              <Link to="/getstarted"><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Save</Button></Link>{' '}
              <Link to="/confirm"><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Submit Payment</Button></Link>{' '}
           </div> 
      </div>
    );
  }
}
