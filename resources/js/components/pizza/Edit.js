import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
class Edit extends Component {
    constructor(props){
        super(props);
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

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/pizza/edit/'+this.props.match.params.id).then(response=>{
          this.setState({
            pizza_name:response.data.name,
            pizza_type:response.data.type,
            pizza_ingredients:response.data.ingredients,
            pizza_price:response.data.price
          });
        }).catch(error=>{
            alert(error);
        })     
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
         axios.put('http://127.0.0.1:8000/api/pizza/update/'+this.props.match.params.id, pizza)
         .then(response=>{
             this.setState({ alert_message:"success" });
             this.props.history.push('/pizza');
         }).catch(err=>
            {this.setState({
                alert_message:"error",
                pizza_name:"",
                 pizza_type:"",
                 pizza_ingredients:"",
                 pizza_price:""
             });

         })
     }
    render(){
    return (
        <div>
        <hr/>
           {this.state.alert_message=="success" ? <SuccessAlert message={"Pizza updated successfully"}/> : null }
           {this.state.alert_message=="error"?<ErrorAlert message={"Error occured while updating the pizza"}/>:null}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                 <label htmlFor="pizza_name">Pizza Name</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_name" 
                 value={this.state.pizza_name}
                 onChange={this.onChangePizzaName}
                 placeholder="Enter pizza_name"></input>
                 </div>

                 <div className="form-group">
                 <label htmlFor="pizza_type">Pizza Type</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_type" 
                 value={this.state.pizza_type}
                 onChange={this.onChangePizzaType}
                 aria-describedby="emailHelp"
                 placeholder="Enter pizza_type"></input>
                 </div>
                
                 <div className="form-group">
                 <label htmlFor="pizza_ingredients">Pizza Ingredients</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_ingredients" 
                 value={this.state.pizza_ingredients}
                 onChange={this.onChangePizzaIngredients}
                 aria-describedby="emailHelp"
                 placeholder="Enter pizza_ingredients"></input>
                 </div>

                 <div className="form-group">
                 <label htmlFor="pizza_price">Pizza price</label>
                 <input type="text" 
                 className="form-control" 
                 id="pizza_price" 
                 value={this.state.pizza_price}
                 onChange={this.onChangePizzaPrice}
                 aria-describedby="emailHelp"
                 placeholder="Enter pizza_price"></input>
                 </div>
                 
                 <button type="submit" className="btn btn-primary">Edit Pizza</button>
            </form>
        </div>
    );
}
}
export default Edit;