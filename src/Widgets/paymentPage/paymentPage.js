import React from "react";
import $ from "jquery";
// import "./styleconfirmation.css";
// import history from "../../utils/history";
import { Link } from 'react-router-dom'

export default class paymentPage extends React.Component {

  componentDidMount() {
    $("button").click(function() {
      $(".check-icon").hide();
      setTimeout(function() {
        $(".check-icon").show();
      }, 0);
    });
  }

//   confirmPage = () => {
//     history.push("/confirm");
//   };


  render() {
      let h
    return (
      <div>
           <div>
               <div>
                   <span>The total amount owed is {this.props.location.state.premium}</span>
               </div>
               <span>Type of Payment </span>  
                <select>
                    <option value='Debit Card' onSelect ={function() { alert('click'); }}>Debit Card</option>
                    <option value='Credit Card'>Credit Card</option>
                    <option value='Savings'>Savings</option>
                    <option value='Cheque'>Cheque</option>
                </select>
           </div>
           <form>
                First Name: <input type='text'></input><br></br>
                Last Name: <input type='text'></input><br></br>
                Card Number: <input type='text'></input><br></br>
                Expiry Date: <input type='text'></input><br></br>
                Nick Name: <input type='text'></input><br></br>
           </form>
           <div>
               <Link to="/confirm"><button>Submit Payment</button></Link>
           </div> 
           <div>
               {h &&
                <h1>BBBBB</h1>
            }
            </div> 
      </div>
    );
  }
}
