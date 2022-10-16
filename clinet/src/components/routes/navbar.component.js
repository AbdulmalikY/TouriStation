import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Button, Navbar, Nav, FormControl, Form, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup,SplitButton } from 'react-bootstrap'

import { BiUserCircle } from "react-icons/bi";


export default class TouriNavbar extends Component {

  constructor(props){
    super(props);


    this.onChangeSearch = this.onChangeSearch.bind(this);



//intialy no data enterd
    this.state = {
      search: '',
      user: false,
      Nonuser: true,
    }
}


chickuser(){
  axios.get("http://localhost:3000/isUserregister", {withCredentials: true})
  .then(res => {
      if(res.data != false){
          this.setState({
            Nonuser: false
          })
      }
  })
}

 componentDidMount(){
 

//Chick if User is loged and store type if true


  //Get User Commen
  axios.get("http://localhost:3000/IsLoged", {withCredentials: true})
  .then(res => {
      if(res.data === true){
        this.setState({user: true})
        this.chickuser()
      }
  })
    
  }
  onChangeSearch(e){
    this.setState({search: e.target.value})
  }
  

  render() {
    return (
<Navbar bg="dark" expand="lg" style={{"padding": "0 10px", "background-color": "#132c33 !important"}}>
  <Navbar.Brand href="/">TouriStation</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/events" className="navbarSections">Events</Nav.Link>
      <Nav.Link href="/resturants" className="navbarSections">Resturants & caffes</Nav.Link>
      <Nav.Link href="/touristic" className="navbarSections">Touristic</Nav.Link>
      <Nav.Link href="/accommodations" className="navbarSections">Accomdation</Nav.Link>
      <Nav.Link href="/malls" className="navbarSections">Malls</Nav.Link>
      <Nav.Link href="/extraservices" className="navbarSections">Extra services</Nav.Link>
  </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.search} onChange={this.onChangeSearch}/>
      <Button variant="outline-info" onClick={() => window.location = "/Search/"+(this.state.search)}>Search</Button>
    </Form>    



      <SplitButton style={{"display": this.state.user ? "none" : "block", "color": "white", marginLeft: "0.5%"}} class="text-white"
      menuAlign={{ lg: 'right' }} 
      title="Join Us" 
      id="dropdown-menu-align-responsive-2" 
      variant="info"
      >
                <Dropdown.Item href="/login">Login</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/register">Register</Dropdown.Item>

    </SplitButton>


    <SplitButton style={{"display": this.state.user ? "block" : "none" , marginLeft: "0.5%"}} class="text-white"
      menuAlign={{ lg: 'right' }} 
      title="Profile" 
      variant="info"
      id="dropdown-menu-align-responsive-2" > 
    <Dropdown.Item href="/newplace" style={{"display": this.state.user && this.state.Nonuser ? "block" : "none"}}>New Place</Dropdown.Item>
    <Dropdown.Item href="/newevent"  style={{"display": this.state.user && this.state.Nonuser ? "block" : "none"}} >New Event</Dropdown.Item>
    <Dropdown.Divider style={{"display": this.state.user && this.state.Nonuser ? "block" : "none"}} />
    <Dropdown.Item href="/profile">My Account</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="http://localhost:3000/logout/">Sign Out</Dropdown.Item>
</SplitButton>
      </Navbar.Collapse>  
        </Navbar>
    );
  }
}
 
