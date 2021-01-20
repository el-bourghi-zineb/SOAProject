import React, { Component}from 'react';
import {BrowserRouter as Router, Link ,Route} from 'react-router-dom';
import axios from 'axios';

class Order extends Component {
    constructor(){
     super();
    this.state = {
        pizzas: [],
    }
    }

    componentDidMount(){
        axios.get('/api/order').then(response=>{
            this.setState({
                pizzas:response.data
            });
            console.log(response.data);
        }).catch(errors=>{
           alert(errors)
        })
    }


render(){
    return (
        <div className="container">
            {this.state.pizzas.map(pizza =>
            <ul className="list-group" key={pizza.id}>
            <li className="list-group-item" >
            <p className="img">
              <img  src="/img/pizza2.jpg"  alt="pizza house logo"/>
            </p>
            <p>{pizza.name} </p>    
            <hr/>
            <p><h1>Ingredients:</h1>{pizza.ingredients}</p>
            <p><h1>Prix:</h1>{pizza.price} DH</p>
            <Link to={`/pizza/commande/${pizza.id}`} className=" btn btn-primary">Commander</Link> &nbsp;
            </li>
            
            </ul>
            )}
        </div> 
    );
 }
}

export default Order;

