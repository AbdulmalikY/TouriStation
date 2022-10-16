
// resetUPassword
import React, { Component } from 'react';


import axios from 'axios'

export default class reset extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            password1: '',
            password2: '',
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

   async componentDidMount(){
        this.checkloginstatus();
         
        await axios.get(`http://localhost:3000/users/resetpass/${this.props.match.params.validstring}/${this.props.match.params.Email}`)    
        .then(res =>{
            console.log(res)
            if(res.data != true){
                window.location = "/"
            }
        })
    }
    //For Email input change 
    onChangePassword1(e) {
        this.setState({
            password1: e.target.value
        });
    }

    onChangePassword2(e) {
        this.setState({
            password2: e.target.value
        });
    }

    //for submit 
    onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();

        const user = {
            Password1: this.state.password1,
            Password2: this.state.password2
        }


        axios.post(`http://localhost:3000/users/resetpass/${this.props.match.params.validstring}/${this.props.match.params.Email}`, user)
        .then(() => {
            alert("Email Changed Succesfuly")
            window.location = '/'
        }
        )
        .catch(err => 
            {
                alert(err.response.data.message)
            }
        )

        } 
        

    render(){
        return(

            <div style={{"margin-top": "3%"}}>  
            <h3>Reset Password</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Password : </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password1}
                onChange={this.onChangePassword1}
                />
          </div>
          <div className="form-group"> 
            <label>Password 2: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password2}
                onChange={this.onChangePassword2}
                />
          </div>
          <div className="form-group">
          <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </form>
            <div className="redirectlink">Rememberd Your Password? <a href="/Login">  
             Login</a></div> 
      </div>
        )
    }
}