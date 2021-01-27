import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/users/userList';
import LogIn from './components/auth/LogIn';
import LogInLinkMail from './components/auth/LogInMail';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import app from "./components/firebaseConfig";
import VehicleList from './components/vehicle/VehicleList';
import VehicleListUser from './components/vehicle/VehicleListUser';
import * as firebase from "firebase";
import "firebase/auth";

library.add(faEdit);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEmail:false,
      isAuthenticated: false,
      isAuthenticating: true,
      user: null
    }
    
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }
  
  componentDidMount() {
    if (app.auth().isSignInWithEmailLink(window.location.href)) {

      var email = window.localStorage.getItem('emailForSignIn');
      if (!email) {

        email = window.prompt('Please provide your email for confirmation');
      }
      app.auth().signInWithEmailLink(email, window.location.href)
        .then((result) => {

          this.setState({isEmail: true});
          window.localStorage.removeItem('emailForSignIn');

        })
        .catch((error) => {

        });
    }

    app.auth().onAuthStateChanged((user)=> {
        if (user) {

          this.setState({isAuthenticated:true}); 
          this.setState({user:app.auth().currentUser});
          this.setState({ isAuthenticating: false });

        }else{

          this.setState({isAuthenticated:false}); 
          this.setState({user:null});
          this.setState({isAuthenticating: false});

        }
      });

  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      isEmail:this.state.isEmail,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    console.log(this.state.isEmail);
    if(!this.state.isEmail){
      return(<div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/users" render={(props) => <Users {...props} auth={authProps} />} />
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
              <Route exact path="/loginmail" render={(props) => <LogInLinkMail {...props} auth={authProps} />} />
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
              <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
              <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
              <Route exact path="/carlist" render={(props) => <VehicleList {...props} auth ={authProps} />} />
              <Route exact path="/carlistuser" render={(props) => <VehicleListUser {...props} auth ={authProps} />} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>);
    }else{
      return (
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/carlistuser" render={(props) => <VehicleListUser {...props} auth ={authProps} />} />
            </Switch>
            <Footer />
          </div>
        </Router>
      );
    }
    
  }
}

export default App;
