import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


const NavBar = styled.nav`
  height: 80px; 
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #62CDFD;

  a {
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    background-color: yellow;
    margin: 20px;
    text-decoration: none;
    cursor: pointer;
    

    &:hover {

    }

  }

  
  
`;

export const smurfServer = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  getSmurfs = () => {
    Axios.get(smurfServer)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
  }


  componentDidMount() {
    this.getSmurfs();
  }

  componentDidUpdate() {
    this.getSmurfs();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar>
            <Link to="/">Home</Link>
            <Link to="/smurf-form">Add Smurf</Link>
          </NavBar>
          {/* <SmurfForm /> */}
          <Smurfs smurfs={this.state.smurfs} />

          <Route
            path="/"
            render={props => (this.componentDidUpdate)}
          />

          <Route
            path="/smurf-form"
            component={SmurfForm}
          />
        </div>
      </Router>
    );
  }
}

export default App;
