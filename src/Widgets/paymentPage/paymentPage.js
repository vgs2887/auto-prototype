import React, { useLayoutEffect } from "react";
import { Link } from 'react-router-dom'

import DebitCard from "./DebitCard";
import Savings from "./Savings";
import Cheque from "./Cheque";
import CreditCard from "./CreditCard";
import Boxy from './Boxy'

import "./stylePaymentPage.css";
import {Button,AppBar,Toolbar,Typography,IconButton,CssBaseline,Container, Grid,makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';





export default class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'none',
                  pay: 'full'
                  };

    this.handleChange = this.handleChange.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);  
    this.handleChange3 = this.handleChange3.bind(this);   


    
  }


  

  handleChange(event) {
    // console.log("before",this.state.value);
    this.setState({value: event.target.value});
    // console.log(this.state.value);
  }
  // handleChange2(event) {
  //   // console.log("before",this.state.pay);
  //   this.setState({pay: event.target.value});
  //   // console.log(this.state.pay);
  // }
  handleChange3(ev) {
    console.log("before",this.state.value);
    this.setState({ pay: ev.target.value });
    console.log(this.state.value);
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

                <br></br>
                <div>
                    <span>Your total Policy Premium is ${k}</span>
                </div>



                <div>
                  <FormControl component="fieldset" name="method-of-payment">
                    <RadioGroup onChange={this.handleChange3} value={this.state.pay}>
                      <FormControlLabel value="full" control={<Radio />} label="Pay Full Premium"/>
                      <FormControlLabel value="monthly" control={<Radio />} label="Pay Monthly Installments" />
                    </RadioGroup>
                  </FormControl>            
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
                  <br></br>    
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
