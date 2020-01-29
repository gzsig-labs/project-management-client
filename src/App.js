import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
      
    </div>
  );
}

export default App;
