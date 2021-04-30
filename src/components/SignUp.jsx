import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import './SignUp.css'

class SignUp extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:'', 
            error: {
                message:''
            }
        }
    }
    signUp()
    {
        const { email,password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
        .catch(error => {
            this.setState({error})
        })
    }
    render()
    {
        return(
            <div className="form-inline signUp" style={{margin: '5%'}}>
                <h2 className="signUp-title" style={{padding: '8px'}}>Sign Up</h2>
                <div className="form-group signUpform">
                    <input 
                    className="form-control email"
                    type="email"
                    style={{marginRight: '5px'}}            

                    placeholder="email"
                    onChange={event => this.setState({email: event.target.value})} />
                    <input 
                    className="form-control password"
                    type="password"
                    style={{marginRight: '5px'}}
                    placeholder="password"
                    onChange={event => this.setState({password: event.target.value})} />
                    <button
                    className="btn btn-primary"
                    type = "button"
                    onClick={() => this.signUp()}>
                        Sign Up
                    </button>
                </div>
                <div style={{color:'red'}}>{this.state.error.message}</div>
                <div style={{margin: '5px'}}><Link to={'/signin'}>Already a user? Sign in instead</Link></div>

            </div>
        )
    }
}
export default SignUp;