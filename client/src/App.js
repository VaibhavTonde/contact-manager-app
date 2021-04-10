import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layouts/Alert";


import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar/>
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/aboutUs' component={AboutUs}/>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/login' component={Login}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
