import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Payment extends Component {
  constructor(props){
    super(props);
  }
    render(){
    return (
        <div>
          <h1 className="text-center">merci de votre confiance dans notre service </h1> 
          <h3 className="text-center">Votre commande sera livré jusqu'à chez vous </h3>
        </div>
    );
}
}

export default Payment;