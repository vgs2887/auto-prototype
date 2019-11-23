import React, { useLayoutEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'


import DebitCard from "./DebitCard";
import Savings from "./Savings";
import Cheque from "./Cheque";
import CreditCard from "./CreditCard";
import Boxy from './Boxy'
import { connect } from 'react-redux'
import { setQuoteObject } from "../../actions";

import "./stylePaymentPage.css";
import {Button,AppBar,Toolbar,Typography,IconButton,CssBaseline,Container, Grid,makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Header from '../../Widgets/Header/Header'


const postData ={"policyId": "7b4ba338-0b66-11ea-a983-060ef1aaca49", "baseLocation": "TX", "premium": 1000.99, "packageCode": "QUOTE", "policyNumber": "7001", "isQuote": false, "policyEffDate": "2019-11-19", "policyExpDate": "2020-06-13", "lastVisitedPage": "Complete", "coverages": {"bodilyInjury": 50.11, "propertyDamage": 10.22, "comprehensive": 100.0, "collision": 400.99}, "drivers": [{"name": "Monica Feloola Geller", "age": 29, "relationship": "SELF", "gender": "female", "license": "OH00000001"}, {"name": "Regina Phelange", "age": 30, "relationship": "ROOMIE", "gender": "female", "license": "OH00000001"}], "vehicles": [{"driverName": "Regina Phelange", "year": 2018, "make": "Honda", "model": "Civic", "vin": "HODHFOAHDLASDOI", "mileage": 130000, "addressLineOne": "4980 usaa blvd", "addressLineTwo": "apt9999", "city": "San Antonio", "state": "Texas", "zip": "78240"}, {"driverName": "Monica Feloola Geller", "year": 2017, "make": "Porshe", "model": "Civic", "vin": "HODHFOAHDLASDOI", "mileage": 120000, "addressLineOne": "4980 usaa blvd", "addressLineTwo": "home", "city": "San Antonio", "state": "Texas", "zip": "99999"}]};

var quote;
class PaymentPage extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = {value: 'none',
                  pay: 'full',
                  
                  };

    this.handleChange = this.handleChange.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);  
    this.handleChange3 = this.handleChange3.bind(this);   
    this.submitHandler = this.submitHandler.bind(this);
    quote={...this.props.quote};              

    // this.props.setQuoteObject(this.quote);
  }


  

  handleChange(event) {
    // console.log("before",this.state.value);
    this.setState({value: event.target.value});
    console.log("disp",this.quote);
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

  submitHandler = e => {
    quote.lastVisitedPage="confirm";
    quote.isQuote=false;
    console.log("arun testing ", quote);
    this.props.setQuoteObject(quote);
    console.log("Payment Page postRequest:  "+JSON.stringify(quote));
    axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi', quote)
    .then(response => {console.log("Payment Page Response"+JSON.stringify(response))})
    .catch(error =>{console.log("Payment Page ERROR"+error)})
}


  render() {
      let h= quote.premium;
      let k;
      h=parseFloat(h).toFixed(2);
      k=parseFloat(h*6).toFixed(2);      
    return (
      <div style={{backgroundColor:'#F5F5F5'}}>
           <div>
           <Header headerText="Auto Insurance Quote"/>

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
              <Link to="/"><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}}>Save</Button></Link>{' '}
              <Link to="/confirm"><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.submitHandler}>Submit Payment</Button></Link>{' '}
           </div> 
           <br></br>
            <br></br>
      </div>

    );
  }
}

const mapStateToProps = state => {
  console.log("Payment Page quote state on click"+JSON.stringify(state.quote))
  return {
    "quote": state.quote,
      };
};

export default connect(mapStateToProps,{ setQuoteObject })(PaymentPage)