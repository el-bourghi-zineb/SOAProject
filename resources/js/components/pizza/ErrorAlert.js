import React, { Component } from 'react';

//import PizzaArticles from './components/PizzaArticles';
class ErrorAlert extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div className="alert alert-danger" role="alert">
            {this.props.message}.
      </div>
    );
}
}

export default ErrorAlert;