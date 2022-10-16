import React, { Component } from 'react';
import Avatar from "./Avatar";
import Detail from "./Detail";
import ReadStars from "./Star-rating";
import Favorite from "./Favorite";
import {Card, Button, Image, Col, Container, Row, Tab, Tabs} from 'react-bootstrap'

function Requestcard(prop, index){
    console.log(index)
    return(
    <Card className="text-center " style={{margin: "2%"}} key={prop._id} value={index}>
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
                 onChange={(e)=>prop.handleOnChange(e.target.value)}

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
export default Requestcard;