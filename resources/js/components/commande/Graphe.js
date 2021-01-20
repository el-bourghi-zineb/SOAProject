import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {withRouter} from 'react-router-dom';

class Graphe extends Component {
  constructor(props){
    super(props);
       this.state={
           chartData:{
              labels:['Pizza Pepperoni, tomate- mozza','Pizza Royale','pizza margherita','Pizza aux quatre fromages','Pizza légère aux légumes','Pizza italienne',	 
              'Pizza au thon','Pizza aux crevettes'],
              datasets:[
                {
                  label:'Pizzas',
                   data:[
                     35,
                     50,
                     35,
                     25,
                     35,
                     25,
                     30,
                     40,
                     20],
                   backgroundColor:
                   ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#00FFFF","#A9A9A9","#FAEBD7","#008B8B"]
                }
              ]
           },
           chartData1:{
            labels:['Pizza Pepperoni, tomate- mozza','Pizza Royale','pizza margherita','Pizza aux quatre fromages','Pizza légère aux légumes','Pizza italienne',	 
            'Pizza au thon','Pizza aux crevettes'],
            datasets:[
              {
                label:'Pizzas',
                 data:[
                  25,
                   50,
                   35,
                   25,
                   35,
                   25,
                   30,
                   40,
                   20],
                   backgroundColor:
                    ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#00FFFF","#A9A9A9","#FAEBD7"]
                 
              }
            ]
         }
       }
  }

    render(){
    return (
        <div>
          <Bar
               data={this.state.chartData}
               options={{ 
                       title:{
                           display:true,
                           text:'Pizza House',
                           fontSize:25
                       },
                       legend:{
                         display:true,
                         position:'bottom'
                       }
                
               }}
           />
           <Bar
               data={this.state.chartData1}
               options={{ 
                       title:{
                           display:true,
                           text:'Pizza House',
                           fontSize:25
                       },
                       legend:{
                         display:true,
                         position:'bottom'
                       }
                
               }}
           />
        </div>
    );
}
}

export default withRouter(Graphe);