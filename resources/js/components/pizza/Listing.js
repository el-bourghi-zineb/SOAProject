import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

class Listing extends Component {

   constructor(){
     super();
     this.onDelete=this.onDelete.bind(this);
     this.state={
       pizzas : [],
       activePage:1,
       itemsCountPerPage:1,
       totalItemsCount:1,
       pageRangeDisplayed:3,
       alert_message:''
     }
   }

   componentDidMount(){
       axios.get('http://127.0.0.1:8000/api/pizza').then(response=>{
         this.setState({
          pizzas:response.data.data,
          itemsCountPerPage:response.data.per_page,
          totalItemsCount:response.data.total,
          activePage:response.data.current_page });
       }).catch(error=>{
           alert(error);
       })     
   }

   handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
    //http://127.0.0.1:8000/pizza?page=1
    axios.get('http://127.0.0.1:8000/api/pizza?page='+pageNumber).then(response=>{
         this.setState({
           pizzas:response.data.data,
           itemsCountPerPage:response.data.per_page,
           totalItemsCount:response.data.total,
           activePage:response.data.current_page
         });
       }).catch(error=>{
           alert(error);
       })  
  }

onDelete(pizza_id)
{
       axios.delete('http://127.0.0.1:8000/api/pizza/delete/'+pizza_id)
       .then(response=>{              
              const pizzas= this.state.pizzas;
              for(const i=0; i<pizzas.length; i++)
              {
                  if(pizzas[i].id==pizza_id)
                  {
                    pizzas.splice(i,1);
                    this.setState({
                      pizzas:pizzas,
                    });
                  }
              }
                 alert("pizza deleted successfuly");
            })       
}
    render(){
    return (
        <div>
         <hr/>
          <table className="table">
          <thead>
           <tr >
           <th scope="col">#</th>
            <th scope="col">Pizza Name</th>
            <th scope="col">Type</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Price</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Action</th>

            </tr>
            </thead>
            <tbody>
            {
                this.state.pizzas.map(pizza=>{
                  return(
                       <tr key={pizza.id}>
                       <th scope="row">{pizza.id}</th>
                       <td>{pizza.name}</td>
                       <td>{pizza.type}</td>
                       <td>{pizza.ingredients}</td>
                       <td>{pizza.price}</td>
                       <td>{pizza.created_at}</td>
                       <td>{pizza.updated_at}</td>
                       <td>
                          <Link to={`/pizza/edit/${pizza.id}`}>Edit</Link>
                          <br/>
                          <a href="#" onClick={this.onDelete.bind(this,pizza.id)}>Delete</a></td>


                       </tr>
                  )
                })
            }
    </tbody>
   </table>    
   <div  className="d-flex justify-content-center">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange.bind(this)}
          itemClass='page-item'
          linkClass='page-link'
        />
      </div>   
 </div>
    );
}
}
export default Listing;