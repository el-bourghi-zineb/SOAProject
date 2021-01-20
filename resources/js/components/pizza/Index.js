import React, {Component} from 'react';
import { Link, Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

class Pizza extends Component {
    render(){
    return (
        <div>
               <div>
                <hr/>
                   <Link to='/pizza' className=" btn btn-primary">Listing</Link> &nbsp;
                   <Link to='/pizza/Add' className=" btn btn-primary">Add</Link>
                   <Route exact path='/pizza' component={Listing}></Route>
                   <Route exact path='/pizza/Add' component={Add}></Route>
                   <Route exact path='/pizza/edit/:id' component={Edit}></Route>

               </div>
        </div>
    );
  } 
}
export default Pizza ;