import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
class Add extends Component {
    constructor(){
        super();
        this.onChangePizzaName=this.onChangePizzaName.bind(this);
        this.onChangePizzaType=this.onChangePizzaType.bind(this);
        this.onChangePizzaIngredients=this.onChangePizzaIngredients.bind(this);
        this.onChangePizzaPrice=this.onChangePizzaPrice.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            pizza_name:'',
            pizza_type:'',
            pizza_ingredients:'',
            pizza_price:'',
            alert_message:''
        }
    }

     onChangePizzaName(e){
          this.setState({
            pizza_name:e.target.value
          });
     }
     onChangePizzaType(e){
        this.setState({
            pizza_type:e.target.value
        });
   }
   onChangePizzaIngredients(e){
    this.setState({
        pizza_ingredients:e.target.value
    });
}
onChangePizzaPrice(e){
    this.setState({
        pizza_price:e.target.value
    });
}
     onSubmit(e){
         e.preventDefault();
         
         const pizza={
             pizza_name : this.state.pizza_name,
             pizza_type:this.state.pizza_type,
             pizza_ingredients:this.state.pizza_ingredients,
             pizza_price:this.state.pizza_price
         }
         axios.post('http://127.0.0.1:8000/api/pizza/store', pizza).then(response=>{
             console.log(response.data);
             this.setState({
                 alert_message:"success",
                 pizza_name:"",
                 pizza_type:"",
                 pizza_ingredients:"",
                 pizza_price:""
             })
         }).catch(err=>{
             this.setState({
                 alert_message:"error"
             })
         })
     }
    render(){
    return (
        <div>
         <hr/>
         {this.state.alert_message=="success" ? <SuccessAlert message={"Pizza added successfully"}/> : null }
           {this.state.alert_message=="error"?<ErrorAlert message={"Error occured while adding the pizza"}/>:null}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                 <label htmlFor="pizza_name">Pizza Name</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_name" 
                 value={this.state.pizza_name}
                 onChange={this.onChangePizzaName}
                 placeholder="Enter pizza_name" required></input>
                 </div>

                 <div className="form-group">
                 <label htmlFor="pizza_type">Pizza Type</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_type" 
                 value={this.state.pizza_type}
                 onChange={this.onChangePizzaType}
                 aria-describedby="emailHelp"
                 placeholder="Enter pizza_type" required></input>
                 </div>
                
                 <div className="form-group">
                 <label htmlFor="pizza_ingredients">Pizza Ingredients</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_ingredients" 
                 value={this.state.pizza_ingredients}
                 onChange={this.onChangePizzaIngredients}
                 aria-describedby="emailHelp"
                 placeholder="Enter pizza_ingredients" required></input>
                 </div>

                 <div className="form-group">
                 <label htmlFor="pizza_price">Pizza price</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_price" 
                 value={this.state.pizza_price}
                 onChange={this.onChangePizzaPrice}
                 aria-describedby="emailHelp"
                 placeholder="Enter pizza_price" required></input>
                 </div>
                 <button type="submit" className="btn btn-primary">Add Pizza</button>
            </form>
        </div>
    );
}
}
export default Add;