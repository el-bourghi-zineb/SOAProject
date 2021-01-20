import React, { Component } from 'react';
import SuccessAlert from '../pizza/SuccessAlert';
import ErrorAlert from '../pizza/ErrorAlert';

class Signup extends Component {
  constructor(){
    super();
    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangeUserEmail=this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword=this.onChangeUserPassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        user_name:'',
        user_email:'',
        user_password:'',
        alert_message:''
    }
}

 onChangeUserName(e){
      this.setState({
        user_name:e.target.value
      });
 }
 onChangeUserEmail(e){
    this.setState({
        user_email:e.target.value
    });
}
onChangeUserPassword(e){
this.setState({
    user_password:e.target.value
});
}
 onSubmit(e){
     e.preventDefault();
     
     const user={
         user_name : this.state.user_name,
         user_email:this.state.user_email,
         user_password:this.state.user_password
     }
     axios.post('http://127.0.0.1:8000/api/user/store', user).then(response=>{
         console.log(response.data);
         this.props.history.push('/');
         this.setState({
             alert_message:"success"
         })
     }).catch(err=>{
         this.setState({
             alert_message:"error"
         })
     })
 }
    render(){
    return (
        <div>
        <h3 className="text-center">Sign Up Form</h3>
        <p className="img"> <img  src="/img/pizza2.jpg" alt="pizza"/></p>
         <hr/>
         {this.state.alert_message=="success" ? <SuccessAlert message={"User sign up successfully"}/> : null }
           {this.state.alert_message=="error"?<ErrorAlert message={"Error occured while the user try to sign up"}/>:null}
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
    <label htmlFor="user_name">User Name</label>
    <input type="text" className="form-control" id="user_name" value={this.state.user_name} onChange={this.onChangeUserName}  />
  </div>
  <div className="form-group">
    <label htmlFor="user_email">Email address</label>
    <input type="email" className="form-control" id="user_email" value={this.state.user_email} onChange={this.onChangeUserEmail} />
  </div>
  <div className="form-group">
    <label htmlFor="user_password">Password</label>
    <input type="password" className="form-control" id="user_password" value={this.state.user_password} onChange={this.onChangeUserPassword}/>
  </div>
  

  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
      </div>
    );
}
}

export default Signup;