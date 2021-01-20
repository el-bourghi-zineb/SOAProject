import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(){
        super();
        this.onChangeUserEmail=this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword=this.onChangeUserPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            email:'',
            password:'',
            alert_message:''
        }
    }
    onChangeUserEmail(e){
      this.setState({
          email:e.target.value
      });
  }
  onChangeUserPassword(e){
  this.setState({
       password:e.target.value
  });
  }
    onSubmit(e){
       e.preventDefault();
       const {email , password} = this.state ;
       axios.post('/api/login',
       {
         email,
         password
       }).then(res=>{
            console.log(res.data);
            //this.setState({err:false});
            if(email==="zineb@gmail.com" && password==="zineb2020"){
            this.props.history.push('/pizza');
            }
            else{
              this.props.history.push('/acceuil/:id');
            }
       }).catch(err=>{
              this.refs.email.value="";
              this.refs.password.value="";
              alert(err);
              //this.setState({err: true});
       });
    }
    render(){
      
       return (
        <div >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                            <h3 className="text-center">Login Form</h3>  
                                <p className="img">
                                 <img  src="/img/pizza2.jpg" className="img-fluid" alt="pizza"/>
                                 </p>
                                <div className="panel-body">   
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        
                                    </div>  
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChangeUserEmail} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChangeUserPassword}  required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember" /> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>

                                                
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
	);
}
}

export default Login;