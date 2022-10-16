import React, { Component } from 'react';
import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
// import Requestcard from '../ReuestCard'

import { Card, Button, Image} from 'react-bootstrap'



function UserJoinDate(D){
    let y = new Date(D)
    y = y.toDateString().split(' ')
    
  return(y[1] + " " + y[2] + ", " + y[3]);
  }


function createrequestcard(prop, index){
    return(
    <Card className="text-center " style={{margin: "2%"}} key={prop._id}>
     <Card.Header>Create Owner Account</Card.Header>
     <div class="wrapper">
      <div id="requestspart1" class="left" style={{"max-width": "250px"}}> 
        <Card.Body>
            <Image className="Imageprofilereq" src={`http://localhost:3000/${prop.icon}`} style={{display: "block"}}/>
            <Card.Title style={{marginTop: "20px"}}>{prop.FName + " " + prop.LName}  ||<span style={{color: "#808B96"}}> {prop.Email}</span></Card.Title>
            <Card.Text style={{"max-width": "100%" }}> {prop.OwnerDes} </Card.Text>
         </Card.Body>
    </div>
    <div id="requestspart2" class="left">
            <Card.Body>
              <Card.Title>Admin Description</Card.Title>
                <Card.Text>
                <textarea 

                //Value of the index in aray
                //Handle Change of input
                />
                </Card.Text>
             </Card.Body>
  </div>
  <div id="requestspart3" class="left">
        <Card.Body>
            <Card.Title>CREATE</Card.Title>
        <Button variant="outline-success" className="AdminRequestButton" onClick={e => console.log(this.state.description)}>APPROVE</Button>   
        <Button variant="outline-danger" className="AdminRequestButton">DENY</Button>
      </Card.Body>
    </div>
    </div>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
)
}

export default class requests extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
      
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onApprove = this.onApprove.bind(this);
        this.onDeny = this.onDeny.bind(this);


        
 

    //intialy no data enterd
        this.state = {
            requests: [],
            description: '',
            input: [],
            Admin : '',
            Fname: '',
            LName: '',
            id: '',
            OwnerDes: '',
            OwnerEmail: '',
            CreationDate: '',
            Icon: '',



            requestsfound: false,
            
        }
    }

    chickadmin(){
        axios.get("http://localhost:3000/isAdminregister", {withCredentials: true})
        .then(res => {
            if(res.data != false){
                this.setState({
                    Admin: res.data
                })
            }
            else{
                window.location = '/';
            }
        })
    }

    componentDidMount(){
        this.chickadmin();
        axios.get('http://localhost:3000/owners/request', 
        {withCredentials: true}
        )
        .then(resp => {
            console.log(resp)
            this.setState({
              requests: resp.data,
              requestsfound: true,
              Name: resp.data.FName + " " + resp.data.LName,
              Email: resp.data.Email,
              OwnerDes: resp.data.OwnerDes,
              FName: resp.data.FName,
              LName: resp.data.LName,
              CreationDate: resp.data.updatedAt,
              Icon: resp.data.icon
            })
        }).then(() => console.log(this.state.requests))
        .catch(err => console.log(err))
    }

    //For First Name input change 
    onChangedescription(e) {
    this.setState({
        description: e.target.value
        });
    }
  

//Accept 

async onApprove(e) {


const Respone = {
    Status: "Approved", 
    AdminDes: this.state.description,
    RequestAdmin: this.state.Admin,

}


await axios.post(`http://localhost:3000/owners/request/${this.state.requests._id}`, Respone,{
     withCredentials: true,
})
.then(res => {
    alert("Owner Is Approved")
    window.location = "/";
})
.catch(err => 
{
    alert(err.response.data.message)
})
}


//Deny
async onDeny(e) {
    e.preventDefault();



const Respone = {
    Status: "Denied", 
    AdminDes: this.state.description,
    RequestAdmin: this.state.Admin,

}


await axios.post(`http://localhost:3000/owners/request/${this.state.requests._id}`, Respone,{
     withCredentials: true,
})
.then(res => {
    alert("Owner Is Denied")
    window.location = "/";
})
.catch(err => 
{
    alert(err.response.data.message)
})
}

    render(){
        return(
    <div>

<h1 className="noPlaceFoundSearch" style={{display: this.state.requestsfound  ? 'none' : 'block' }}> No Requests</h1>
<Card className="text-center " style={{margin: "2%"}} style={{display: this.state.requestsfound  ? 'block' : 'none' }}>
     <Card.Header>Create Owner Account</Card.Header>
     <div class="wrapper">
      <div id="requestspart1" class="left" style={{"max-width": "250px"}}> 
        <Card.Body>
            <Image className="Imageprofilereq" src={`http://localhost:3000/${this.state.Icon}`} style={{display: "block"}}/>
            <Card.Title style={{marginTop: "20px"}}>{this.state.FName + " " + this.state.LName } ||<span style={{color: "#808B96"}}> {this.state.Email}</span></Card.Title>
            <Card.Text style={{"max-width": "100%" }}>
            {this.state.OwnerDes}
          </Card.Text>
         </Card.Body>
    </div>
    <div id="requestspart2" class="left">
            <Card.Body>
              <Card.Title>Admin Description</Card.Title>
                <Card.Text>
                <textarea value={this.state.description} onChange={this.onChangedescription} required/>
                </Card.Text>
             </Card.Body>
  </div>
  <div id="requestspart3" class="left">
        <Card.Body>
            <Card.Title>CREATE</Card.Title> 
        <Button variant="outline-success" onClick={this.onApprove}>APPROVE</Button>   
        <Button variant="outline-danger" onClick={this.onDeny}>DENY</Button>
      </Card.Body>
    </div>
    </div>
    <Card.Footer className="text-muted">{UserJoinDate(this.state.CreationDate)}</Card.Footer>
</Card>

{/* <div>
{this.state.requests.map((req,index) => createrequestcard(req, index))}
</div> */}

</div>
        )
    }
}
