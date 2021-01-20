import React, { Component } from 'react';

//import PizzaArticles from './components/PizzaArticles';
class SuccessAlert extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div className="alert alert-success" role="alert">
                 {this.props.message}
        </div>
    );
}
}

export default SuccessAlert;