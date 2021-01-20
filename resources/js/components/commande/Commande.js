import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {Link} from 'react-router-dom';
class Commande extends Component {
    constructor(props){
        super(props);/*
        this.onChangecardNumber=this.onChangecardNumber.bind(this);
        this.onChangeMois=this.onChangeMois.bind(this);
        this.onChangeYear=this.onChangeYear.bind(this);
        this.onChangecvCode=this.onChangecvCode.bind(this);
        this.onChangeAdress=this.onChangeAdress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);*/
        this.state={
            pizza_name:'',
            pizza_type:'',
            pizza_ingredients:''
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/pizza/edit/'+this.props.match.params.id).then(response=>{
          this.setState({
            pizza_name:response.data.name,
            pizza_price:response.data.price,
            pizza_type:response.data.type,
            pizza_ingredients:response.data.ingredients
          });
        }).catch(error=>{
            alert(error);
        })     
    }

     onChangecardNumber(e){
          this.setState({
            payment_number:e.target.value
          });
     }
     onChangeMois(e){
        this.setState({
            payment_mois:e.target.value
        });
   }
   onChangeYear(e){
    this.setState({
        payment_year:e.target.value
    });
}
onChangecvCode(e){
    this.setState({
        payment_cvCode:e.target.value
    });
}
onChangeAdress(e){
    this.setState({
        payment_adress:e.target.value
    });
}
handleToken(token, addresses){
    console.log({token, addresses});
    alert('Your payment is passed successfuly');
}
     
    render(){
    return (
        <div>
        <h3 className="text-center">Vous avez commander</h3>
        <div className="container">
        <ul className="list-group">
        <li className="list-group-item" >
             <p>{this.state.pizza_name} </p>
             <p><h1>Ingredients: </h1>{this.state.pizza_ingredients}</p>
             <p><h1>Prix: </h1>{this.state.pizza_price} DH</p>
        </li>
        </ul>
        </div>
        
        <h3 className="text-center">Maintenant vous ne pouvez pas annuler la commande, merci de choisir une manière pour payer votre commande.</h3>
          <h1 className="text-center">Payment</h1>
          <h3 className="text-center">Si vous voulez payer en espèce. Vous avez {this.state.pizza_price} DH à payer.</h3>
          
               <Link className=" btn btn-primary" to="/payment">Payer</Link>
               
          <hr/> <h3 className="text-center">Sinon, vous voulez utiliser une carte, veuillez renseigner les informations nécessaires.</h3>
          <br/>
          <StripeCheckout
          stripeKey="pk_test_ORVnnptTBhhlgBwbxb7ZvlnH00voXsCyTG"
          token={this.handleToken}
          billingAddress
          shippingAddress
          amount={this.state.pizza_price}
        />
        <hr/>
        
             <Link className=" btn btn-primary" to="/payment">Confirmer Votre Commande</Link>
        
        </div>
    );
}
}
export default Commande;