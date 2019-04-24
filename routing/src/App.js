import React, {Component} from 'react';
import './App.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <h1>Welcome to Home Component</h1>
    )
  }
}

class Alpha extends Component {
  doSomething = (e) => {
    e.preventDefault();
    this.props.history.push("/beta"); //the doSomething button now will render the beta page
  }
  // componentDidMount(){
  //   alert("Alpha!");
  // } //optional!
  render() {
    return (
      <div>
        <h1>Welcome to Alpha Component</h1>
        <form onSubmit={this.doSomething}>
          <input type = "text" />
          <button type = "submit">Do Something</button> 
        
        </form>
      </div>
    )
  }
}

class Beta extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Beta Component</h1>
        {
          this.props.tasks.map( (task, index) =>
            <li key={index}>{task}</li>
          )
        }
      </div>
    )
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        "Learn React",
        "Learn Express",
        "Learn Redux"
      ]
    }
  }
  render() {
  return (
    <div>
      <h1>Router Demo</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alpha">Alpha</Link></li>
        <li><Link to="/beta">Beta</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/alpha" component={Alpha} />
      <Route 
          path='/beta'
          render={(props) => <Beta {...props} tasks={this.state.tasks}   //can pass in extra functionality like tasks... dont do this for the exam
          
        />}
        />
      </BrowserRouter>
    </div>
  );
}
}


export default App;
