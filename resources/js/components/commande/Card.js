import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link ,Route} from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
class Card extends Component {
    handleToken(token, addresses){
         console.log(token, addresses);
    }
    onSubmit(e){
        e.preventDefault();         
             const payment={
                 payment_number : this.state.payment_number,
                 payment_mois:this.state.payment_mois,
                 payment_year:this.state.payment_year,
                 payment_cvCode:this.state.payment_cvCode,
                 payment_adress:this.state.payment_adress
             }
             axios.post('http://127.0.0.1:8000/api/payment/store', payment).then(response=>{
                 console.log(response.data);
                 this.setState({
                     payment_number:'',
                     payment_mois:'',
                     payment_year:'',
                     payment_cvCode:'',
                     payment_adress:''
                 })
                 this.props.history.push('/payment');
             }).catch(err=>{
                 alert(err);
             })
         }
    
    render(){
    return (
        <div>
          <h1 className="text-center">merci de votre confiance dans notre service </h1> 
        <StripeCheckout
          stripeKey="pk_test_ORVnnptTBhhlgBwbxb7ZvlnH00voXsCyTG"
          token={this.handleToken}
          billingAddress
          shippingAddress
        />
         <form className="text-center" onSubmit={this.onSubmit}>
                <div className="form-group">
                 <label htmlFor="payment_number">Card Number</label>
                 <br/>
                 <input type="text" 
                 className="form-control-lg" 
                 id="payment_number" 
                 value={this.state.payment_number}
                 onChange={this.onChangecardNumber}
                 placeholder="Enter card number" required></input>
                 </div>
                  <p>Expirate Date</p>
                 <div className="form-group">
                 <label htmlFor="payment_mois">Mois</label>
                 <br/>
                 <input type="text" 
                 className="form-control-lg" 
                 id="payment_mois" 
                 value={this.state.payment_mois}
                 onChange={this.onChangeMois}
                 aria-describedby="emailHelp"
                 placeholder="Enter mois" required></input>
                 </div>
                
                 <div className="form-group">
                 <label htmlFor="payment_year" >Year</label>
                 <br/>
                 <input type="text" 
                 className="form-control-lg" 
                 id="payment_year" 
                 value={this.state.payment_year}
                 onChange={this.onChangeYear}
                 aria-describedby="emailHelp"
                 placeholder="Enter year" required></input>
                 </div>

                 <div className="form-group">
                 <label htmlFor="payment_cvCode">cvCode</label>
                 <br/>
                 <input type="text" 
                 className="form-control-lg" 
                 id="payment_cvCode" 
                 value={this.state.payment_cvCode}
                 onChange={this.onChangecvCode}
                 aria-describedby="emailHelp"
                 placeholder="Enter cvCode"></input>
                 </div>

                 <div className="form-group">
                 <label htmlFor="payment_adress">Address</label>
                 <br/>
                 <input type="text" 
                 className="form-control-lg" 
                 id="payment_adress" 
                 value={this.state.payment_adress}
                 onChange={this.onChangeAdress}
                 aria-describedby="emailHelp"
                 placeholder="Enter Address" required></input>
                 </div>
                 <h3>The amount to pay is {this.state.pizza_price} DH</h3>
                 <button type="submit" className="btn btn-primary">Pay</button>
            </form>
         </div>
    );
}
}

export default Card;