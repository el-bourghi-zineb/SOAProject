import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link ,Route} from 'react-router-dom';
import Example from './components/Example';
import Pizza from './components/Pizza';
import NavBar from './components/NavBar';
//import PizzaArticles from './components/PizzaArticles';
class Index extends Component {
    render(){
    return (
        <div className="container">
        
           <Router>
             
               <div>
               <Link to="/">Home</Link>
               <br/>
               <Link to="/pizza">Pizza</Link>
                   <Route exact path='/' component={Example}></Route>
                   <Route exact path='/pizza' component={Pizza}></Route>
               </div>
           </Router>
        </div> 
    );
}
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}