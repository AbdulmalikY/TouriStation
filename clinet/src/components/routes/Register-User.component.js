import React, { Component } from 'react';
import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import GoogleButton from 'react-google-button'



export default class RegisterUsers extends Component {

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
        this.onChangeOwnerDes = this.onChangeOwnerDes.bind(this);
        this.onChangeIsowner = this.onChangeIsowner.bind(this);
        // this.this.routechange = this.this.routechange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


//intialy no data enterd
        this.state = {
            FName: '',
            LName: '',
            Email: '',
            icon: null,
            Password1: '',
            Password2: '',
            OwnerDes: '',
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
    //For password match input change 
    onChangeOwnerDes(e) {
        this.setState({
            OwnerDes: e.target.value
        });
    }

    onChangeIsowner(e) {        
        this.setState({
            IsOwner: e.target.checked
        });
    }

    // routechange(){
    //     let googlepath=`http://localhost:3000/auth/google`;
    //     history.push(googlepath)
    // }


    //for submit 
    async onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();

        let types = this.state.IsOwner ? "owners" : "users"


     const formData = new FormData();
        formData.append('FName', this.state.FName);
        formData.append('LName', this.state.LName);
        formData.append('Email', this.state.Email);
        formData.append('icon', this.state.icon);
        formData.append('Password1', this.state.Password1);
        formData.append('Password2', this.state.Password2);
        formData.append('OwnerDes', this.state.OwnerDes);


    await axios.post('http://localhost:3000/' + types + '/register', formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "type": "formData"
         },
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
    <div style={{"margin-top": "3%"}}>  
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
        <label className="custom-file-label">Icon:  {this.state.icon == null  ? " " :  this.state.icon.name}</label>
          <input  type="file"

              className="custom-file-input"
              onChange={this.fileupload}
              />
        </div>
        <div style={{marginTop: '20px', marginBottom: '5px'}}> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.IsOwner}
            onChange={this.onChangeIsowner}/>
        <label>Is this an Owner Account?</label>
        </div>
        <div className="form-group"> 
        <label>Descripe Your Busines:</label>
            <input type="text" className="form-control" 
            disabled={this.state.IsOwner == false}
            value={this.state.OwnerDes}
            onChange={this.onChangeOwnerDes} />
        </div>
          <div className="form-group">
            <input type="submit" value={this.state.IsOwner ? "Create Owner Account" : "Create User Account"} className="btn btn-primary" />
          </div>
        </form>
        <div class="or-container">
          <div class="line-separator"></div>
             <div class="or-label">or</div>
                <div class="line-separator"></div>
             </div>
        <GoogleButton onClick={event => window.location.href="http://localhost:3000/auth/google"}
        className="googlebutton"
        label="Sign Up with Google"
        disabled={this.state.IsOwner}/>

           <div className="redirectlink">Already have and account? <a href="/login">Sign in </a></div> 
     
      </div>
        )
    }
}
