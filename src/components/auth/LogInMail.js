import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import app from "../firebaseConfig";
import * as firebase from "firebase";
import "firebase/auth";
import { getUserByRole } from '../../services/users';
import {Card, Button, Form, Row, Col, DropDown} from 'react-bootstrap'; 
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

class LogInLinkMail extends Component {
    

  state = {
    isLoad: true,
    username: "",
    password: "",
    uId:"",
    id: "",
    email:"",
    name:"",
    lastName:"",
    telephone:"",
    owners:[],
    errors: {
      auth: null,
      blankfield: false
    }
  };

  setOwner(value){
    if(value != null){
        this.setState({uId:value.uId});
        this.setState({id:value.id});
        this.setState({name:value.name});
        this.setState({lastName:value.lastName});
        this.setState({telephone:value.telephone});
        this.setState({email:value.email});
    }
  }
    
  componentDidMount() {
    getUserByRole("Owner").then((ResponseJson) => {
        this.setState({
            owners: ResponseJson,
            isLoad: false
        });
    });
  }


  clearErrorState = () => {
    this.setState({
      errors: {
        auth: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    //Url Bundler
    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000/carlist',
        // This must be true.
        handleCodeInApp: true,
      };

    // Firebase Auth integration here

    app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return app.auth().sendSignInLinkToEmail(this.state.email, actionCodeSettings);
  })
  .catch(function(error) {
    // Handle Errors here.
  });
    await app
            .auth()
            .sendSignInLinkToEmail(this.state.email, actionCodeSettings)
            .then(result => {
                window.localStorage.setItem('emailForSignIn', this.state.password);
                window.localStorage.setItem('user', this.state.username);
                //window.localStorage.setItem('userID', result.user);
                //this.props.auth.setAuthStatus(true);
                //this.props.auth.setUser(result.user);
                //this.props.history.push("/");
            })
            .catch(error => {
              let err = null;
              !error.message ? err = { "message": error} : err = error;
              this.setState({
                errors: {
                  ...this.state.errors,
                  auth: err
                }
            }); 
            console.log(this.state.errors)   
            });
  };

  render() {
      return (
        <Card
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            
        >
            <Card.Header>
                <Card.Title>
                    Add new car
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>                 
                    <Card.Title>
                        Owner information
                    </Card.Title>
                    <br/>
                    <Row>
                        <Col>                        
                            <Autocomplete
                                id="combo-box-owners"
                                onChange={(event, value) => this.setOwner(value)}
                                options={this.state.owners}
                                getOptionLabel={(option) => option.email}                            
                                renderInput={(params) => <TextField {...params} label="Select an owner" variant="outlined" />}
                            />
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="id" placeholder="ID"  value={this.state.id} />
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="email" placeholder="Email"  value={this.state.email} />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control disabled={true} id="name" placeholder="Name"  value={this.state.name} />
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="lastname" placeholder="Lastname"  value={this.state.lastName} />
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="telephone" placeholder="Telephone"  value={this.state.telephone} />
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
            <Card.Footer>
            <Button variant='success' onClick={this.handleSubmit}>Send link</Button>
            </Card.Footer>
        </Card>
    );
  }
}

export default LogInLinkMail;