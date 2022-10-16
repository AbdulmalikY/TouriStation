import React, { Component } from 'react';


import axios from 'axios'

export default class reset extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeIsowner = this.onChangeIsowner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Email: '',
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
        }

        let types = this.state.IsOwner ? "owners" : "users"

        axios.post('http://localhost:3000/' + types + '/passwordreset', user, {
            withCredentials: true,
        })
        .then(result => {
            alert("We sent a Reset Password Email")
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
            <h3>Reset Password</h3>
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
        <div> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.IsOwner}
            onChange={this.onChangeIsowner}/>
        <label>Is this for Owner Account?</label>

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