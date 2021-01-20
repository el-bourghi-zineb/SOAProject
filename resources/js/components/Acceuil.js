import React, { Component } from 'react';
import axios from 'axios';
class Acceuil extends Component {

constructor(){
    super();
    this.changeAddress=this.changeAddress.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        payment_address:''
    }
}
changeAddress(e){
    this.setState({
        payment_adress:e.target.value
    });
}

onSubmit(e){
    e.preventDefault();         
         const payment={
             payment_adress:this.state.payment_adress
         }
         axios.post('http://127.0.0.1:8000/api/address/store', payment).then(response=>{
             console.log(response.data);
             this.setState({
                 payment_adress:''
             })
             this.props.history.push('/order');
         }).catch(err=>{
             console.log(err.response);
         })
     }

    render(){
    return (
        <div>
        <h1 className="text-center">Bienvenue Monsieur/Madame</h1>
        <h1 className="text-center"></h1>
         <p className="text-center">Livrant à </p>
         <hr/>
         <form className="text-center" onSubmit={this.onSubmit}>
         <div className="form-group">
                 <label>Enter Your Address</label>
                 <br/>
                 <input
                 type="text" 
                 name="payment_adress"
                 className="form-control-lg" 
                 id="payment_adress" 
                 value={this.state.value}
                 onChange={this.changeAddress}
                 placeholder="Enter Address" required>
                 </input>
        </div>
              <button type="submit" className="btn btn-primary">Order a Pizza</button>
         </form>
        </div>
    );
}
}

export default Acceuil;