import React, { useLayoutEffect } from "react";
import "./stylePaymentPage.css";
import { Link } from 'react-router-dom'
import DebitCard from "./DebitCard";
import Savings from "./Savings";
import Cheque from "./Cheque";
import CreditCard from "./CreditCard";


export default class paymentPage extends React.Component {
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
      k=parseFloat(h/6).toFixed(2);      
    return (
      <div>
           <div>
               <div>
                  <h1>Payment Page</h1>
               </div>
               <div>
                 <form>
                 <  input type='radio' value='full' required name='payment'onChange={this.handleChange2}></input><span>Pay Full Amount</span><br></br>
                 <  input type='radio' value='monthly' name='payment' onChange={this.handleChange2}></input><span>Pay Monthly Installments</span><br></br>
                 </form>
               </div>
               <div>
                 {
                   this.state.pay === 'none' &&
                   <span>The total amount owed is {h}</span>
                 }
               </div>
               <div>
                 {
                   this.state.pay === 'full' &&
                   <span>The total amount owed is {h}</span>
                 }
               </div>
               <div>
                 {
                   this.state.pay === 'monthly' &&
                   <div>
                   <div>The total amount owed is {k}</div>
                   <label> Installments </label>
                   <ul>
                    <li>{k} is owed for November</li>
                    <li>{k} is owed for December</li>
                    <li>{k} is owed for January</li>
                    <li>{k} is owed for Febraury</li>
                    <li>{k} is owed for March</li>
                    <li>{k} is owed for April</li>
                   </ul>
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
               <Link to="/confirm"><button>Submit Payment</button></Link>
           </div> 
      </div>
    );
  }
}
