import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';
import './SignIn.css'

class SignIn extends Component{
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
    signIn()
    {
        // console.log(this.state);
        const { email,password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .catch(error => {
            console.log( error);
            this.setState({error})
        })
    }
    render()
    {
        return(
            <div className="form-inline signIn" style={{margin: '5%'}}>
                <h2 className="signIn-title" style={{padding: '8px'}}>Sign In</h2>
                <div className="form-group signInform">
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
                    onClick={() => this.signIn()}>
                        Sign In
                    </button>
                </div>
                <div style={{color:'red'}}>{this.state.error.message}</div>
                <div style={{margin: '5px'}}><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        )
    }
}
export default SignIn;