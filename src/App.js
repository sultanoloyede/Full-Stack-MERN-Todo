import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Createtodo from "./components/create-todo.component";
import Edittodo from "./components/edit-todo.component";
import Todolist from "./components/todos-list.component";

import logo from "./logo.png";

function App() {
    return (
      <Router>
        <div className = "container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className= "navbar-brand" href="" target="_blank">
              <img src={logo} width = "30" alt=""/>
            </a>
            <Link to="/" classname="navbar-brand">Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todos</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={Todolist} />
          <Route path="/edit/:id" component={Edittodo} />
          <Route path="/create" component={Createtodo} /> 
        </div>
      </Router>
    );
}

export default App;
