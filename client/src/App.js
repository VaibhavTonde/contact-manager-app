import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";

import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <NavBar/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/aboutUs' component={AboutUs}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
