import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Example from './Example';
import About from './About';
import Pizza from './pizza/Index';
import Login from './user/Login';
import Signup from './user/Signup';
import Order from './Order';
import Acceuil from './Acceuil';
import Commande from './commande/Commande';
import Payment from './commande/Payment';
import Graphe from './commande/Graphe';
import Error404 from './Error404'; 

class NavBar extends Component {
    render(){
    return (
  
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
             <Link className="nav-link" to="/">Home </Link>
              </li>
               <li className="nav-item">
               <Link className="nav-link" to="/about">About Us</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link" to="/graphe">Mes graphes</Link>
               </li>
            </ul>
            
            <li className="nav-item">
            <Link className=" btn btn-primary" to="/login">Sign In</Link>
               </li>
               
               <li className="nav-item">
               <Link className=" btn btn-primary" to="/signup">Sign Up</Link>
               </li>
               
              
              <br/>
               
               
            <form className="form-text text-muted">
                <p>Pizza House</p>
            </form>
           </div>
          </nav> 
     <Switch>
          <Route exact path='/' component={Example}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/order' component={Order}></Route>
          <Route exact path='/pizza' component={Pizza}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/pizza/Add' component={Pizza}></Route>
          <Route exact path='/pizza/edit/:id' component={Pizza}></Route>
          <Route exact path='/acceuil/:id' component={Acceuil}></Route>
          <Route exact path='/payment' component={Payment}></Route>
          <Route exact path='/graphe' component={Graphe}></Route>
          <Route exact path='/pizza/commande/:id' component={Commande}></Route>
          <Route exact path='/*' component={Error404}></Route>
 </Switch>

       </div>
    );
}
}
export default NavBar;

if (document.getElementById('example')) {
    ReactDOM.render(<Router><NavBar /></Router>, document.getElementById('example'));
}
