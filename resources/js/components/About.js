import React, { Component } from 'react';

//import PizzaArticles from './components/PizzaArticles';
class About extends Component {
    render(){
    return (
        <div>
        <h1 className="text-center">Nous sommes une restaurante spécialisé en pizzas. Nous préparons tous types pizzas.</h1>
        <h1 className="text-center"></h1>
        <p className="img">
             <img  src="/img/chef.jpg" className="img-fluid" alt="pizza house logo"/>
        </p>
           </div>
    );
}
}

export default About;

