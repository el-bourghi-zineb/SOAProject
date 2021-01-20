import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Example extends Component {
     
    render(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                    <p className="text-center">Envie d’une pizza bien fournie? Une napolitaine ou une végétarienne? Rendez-vous sur PIZZAHOUSE.</p>                    
                        <p className="text-center">Restez chez vous, LE PIZZAHOUSE prépare et livre à vous.</p>
                        <p className="text-center">PIZZAHOUSE, votre solution facile et rapide pour un repas savoureux à domicile.</p>
                    </div>
                    <br/>
               <h2 className="text-center">La pizza : un voyage en Italie… à domicile !</h2>
                    <p className="img">
                    <img  src="/img/pizza-house.png" className="img-fluid" alt="pizza house logo"/>
                    </p>
                </div>
            </div>
        </div>
    );
}
}
export default Example;




