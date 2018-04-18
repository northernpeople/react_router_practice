import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link, NavLink} from "react-router-dom";


let Home = () => (<h1> home</h1>);
let About = () => (<h3> about </h3>);

let Links = () => (
  <div>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
  </div>
)
let s = { color: "red"};
let NavLinks = () => (
  <div>
    <NavLink exact activeStyle={s} to="/">home</NavLink>
    <NavLink exact activeStyle={s} to="/about">about</NavLink>>
  </div>
)

class App extends Component {

render() {
  return (
      <div>
        <NavLinks/>
        <hr/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/"      component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
