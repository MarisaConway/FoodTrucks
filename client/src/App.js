import React, { Component } from 'react';
import logo from './logo.svg'; //doesnt look lik I need this line
import './App.css';
import axios from 'axios';
import { runInThisContext } from 'vm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      trucks: [],
      newTruck : {
        make: "",
        model: "",
        year: null

      }
    }
  }

  componentDidMount = () => {
    this.getTruckin();
  
  }

  getTruckin = () => {
    axios.get("http://localhost:8000/trucks").then(res => {  // .then is a promise. Making a promise to catch the errors on the .get page
    console.log(res);
    this.setState({trucks: res.data.trucks}); //this says that in our data in console we should have a data file and in that there should be a trucks file.
  }).catch( err => {
    console.log(err);
  });

  }

  changeMake = (e) => {
    let tr = {...this.state.newTruck};
    tr.make = e.target.value;
    this.setState({newTruck: tr});
  }

  changeModel = (e) => {
    let tr = {...this.state.newTruck};
    tr.model = e.target.value;
    this.setState({newTruck: tr});
  }
  changeYear = (e) => {
    let tr = {...this.state.newTruck};
    tr.year = e.target.value;
    this.setState({newTruck: tr});
  }

  newTruck = (e)  => {
    e.preventDefault(); //dont submit the form anywhere instead sends the form data to the backend to the truck were using.
    axios.post("http://localhost:8000/trucks", this.state.newTruck)
    .then(res => {
      console.log(res);
      this.getTruckin();
      this.setState({newTruck: {make: "", model: "", year: 1999 }});
    }).catch(err => {
      console.log(err);
    });
  }

delete = (_id, e) => {
  console.log(_id);
  axios.delete(`http://localhost:8000/trucks/${_id}`)
    .then(res => {
      console.log(res);
      this.getTruckin();
    }).catch(err => {
      console.log(err);
    });
}

  render() {
    return (
      //react must have at least one child
      <div>
        <h1>Choose Your Truck</h1> 
        <ul>
          {
            this.state.trucks.map((truck, index) => //this is the only place where it cant have {} because were only returning 1 line of code! 
              <li key={index}>
              {truck.make} {truck.model} &nbsp; 
              <button onClick = {this.delete.bind(this, truck._id)}>&times;</button>
              
              </li> //list the index of the truck and the truck
            )
          }
          
        </ul>
        <form onSubmit={this.newTruck}>
          <p>
          &nbsp;Make:&nbsp;
          <input type ="text" onChange={this.changeMake} value={this.state.newTruck.make}/>
          </p>
          <p>
          &nbsp; Model:&nbsp;
          <input type ="text" onChange={this.changeModel} value={this.state.newTruck.model}/>
          </p>
          <p>
          &nbsp;Year:&nbsp;
          <input type ="number" onChange={this.changeYear} value={this.state.newTruck.year}/>
          </p>
          &nbsp;<button type = "submit">Get Truckin</button>
        </form>
      </div>
      
    );
  }
}

export default App;
