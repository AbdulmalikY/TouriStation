import React, { Component } from 'react';

import axios from 'axios'

export default class LoginAdmins extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            Email: '',
            Password: '',
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

    //for submit 
    onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();

        const admin = {
            Email: this.state.Email,
            Password: this.state.Password,
        }

        axios.post('http://localhost:3000/admins/login', admin, {
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

    <div>
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
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
        )
    }
}