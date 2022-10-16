import React, { Component } from 'react';
import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'


export default class RegisterAdmins extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.fileupload = this.fileupload.bind(this);
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

         //intialy no data enterd
        this.state = {
            FName: '',
            LName: '',
            Email: '',
            icon: null,
            Password1: '',
            Password2: '',
        }
    }
    checkloginstatus() {
        axios.get("http://localhost:3000/adminreigster", {withCredentials: true})
        .then(res => {
            if(res.data === false){
                window.location = '/register';
            }
        })
    }

    componentDidMount(){
        this.checkloginstatus();
        }

    //For First Name input change 
    onChangeFName(e) {
    this.setState({
            FName: e.target.value
        });
    }

     //For Last Email input change 
    onChangeLName(e) {
        this.setState({
             LName: e.target.value
        });
    }

    //For Email input change 
    onChangeEmail(e) {
        this.setState({
             Email: e.target.value
         });
    }
    
    // File change Handler input change 
    fileupload(e) {
        this.setState({
        icon: e.target.files[0],
        })
    }
    
 
    //For Password input change 
    onChangePassword1(e) {
        this.setState({
            Password1: e.target.value
        });
    }

    //For password match input change 
    onChangePassword2(e) {
        this.setState({
            Password2: e.target.value
        });
    }

    //for submit 
    async onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();



     const formData = new FormData();
        formData.append('FName', this.state.FName);
        formData.append('LName', this.state.LName);
        formData.append('Email', this.state.Email);
        formData.append('icon', this.state.icon);
        formData.append('Password1', this.state.Password1);
        formData.append('Password2', this.state.Password2);


    await axios.post('http://localhost:3000/admins/register', formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "type": "formData",
         },
         withCredentials: true,

    })
    .then(res => {
        alert("We send a Confirmation email")
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
        <h3>Create New Accout</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.FName}
                onChange={this.onChangeFName}
                />
          </div>
          <div className="form-group col-md-6"> 
            <label>LName: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.LName}
                onChange={this.onChangeLName}
                />
          </div>
          </div>
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
          <label>Password1: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.Password1}
              onChange={this.onChangePassword1}
              />
        </div>
        <div className="form-group"> 
          <label>Password2: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.Password2}
              onChange={this.onChangePassword2}
              />
        </div>
        <div className="custom-file"> 
          <label className="custom-file-label">Icon: </label>
          <input  type="file"

              className="custom-file-input"
              onChange={this.fileupload}
              />
        </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
        )
    }
}
