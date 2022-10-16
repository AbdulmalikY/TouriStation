import React, { Component } from 'react';
import GoogleButton from 'react-google-button'


import axios from 'axios'

export default class LoginUsers extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeIsowner = this.onChangeIsowner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Email: '',
            Password: '',
            IsOwner: false,
        }
    }
    checkloginstatus() {
        axios.get("http://localhost:3000/IsLoged", {withCredentials: true})
        .then(res => {
            if(res.data === true){
                window.location = '/';
            }
        })
    }

    componentDidMount(){
        this.checkloginstatus();
    }

    //For Email input change 
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    //For password input change 
    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }
    onChangeIsowner(e) {        
        this.setState({
            IsOwner: e.target.checked
        });
    }
    //for submit 
    onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();

        const user = {
            Email: this.state.Email,
            Password: this.state.Password,
        }

        let types = this.state.IsOwner ? "owners" : "users"

        axios.post('http://localhost:3000/' + types + '/login', user, {
            withCredentials: true,
        })
        .then(result => {
            console.log(result.data)
            window.location = '/';
        })
        
        .catch(err => 
            {
                alert(err.response.data.message)
            })

        } 


    render(){
        return(

            <div style={{"margin-top": "3%"}}>  
            <h3>LogIn</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
          <label>Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.Password}
              onChange={this.onChangePassword}
              />
        </div>
        <div> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.IsOwner}
            onChange={this.onChangeIsowner}/>
        <label>Is this an Owner Account?</label>

        </div>
          <div className="form-group">
          <input type="submit" value={this.state.IsOwner ? " Owner Sign in" : "Sign in"} className="btn btn-primary" />
          </div>
        </form>

        <div class="or-container">
          <div class="line-separator"></div>
             <div class="or-label">or</div>
                <div class="line-separator"></div>
             </div>
        <GoogleButton onClick={event => window.location.href="http://localhost:3000/auth/google"}
            className="googlebutton"
            label="Sign In with Google"
            disabled={this.state.IsOwner}/>
            <div className="redirectlink">Didn't create accoutn yet? <a href="/register">  
             Register</a></div> 
             <div className="redirectlink">Forgot You Password?<a href="/Reset">  
             Reset Password</a></div> 
      </div>
        )
    }
}