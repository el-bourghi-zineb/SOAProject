import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//import PizzaArticles from './components/PizzaArticles';
class Error404 extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div>
        <div className="alert alert-danger">
            404 Page Not Found. <Link to="/" className="alert-link">Back to home</Link>
        </div>
      </div>
    );
}
}

export default Error404;