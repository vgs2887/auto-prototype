import React from "react";


export default function DebitCard () {
    return (
        <div>
            <h4>Debit Card</h4>
            <form>
            First Name: <input type='text'></input><br></br>
            Last Name: <input type='text'></input><br></br>
            Card Number: <input type='text'></input><br></br>
            Expiry Date: <input type='text'></input><br></br>
            PIN: <input type='text'></input><br></br>
            CVV: <input type='text'></input><br></br>
            Nick Name: <input type='text'></input><br></br>
            </form>
        </div>
    );
}
