import React, { Component } from 'react';
import axios from "axios";

const gray = 'gray';
const red = 'red';

export default class Favorites extends Component{
  constructor(props){
    super(props);

    this.state = { 
        color: gray,
    };

    this.changeColor = this.changeColor.bind(this);
  }



  checkloginstatus() {
    axios.get("http://localhost:3000/IsLoged", {withCredentials: true})
    .then(res => {
      if(res.data === false){
        alert("You must login to like your favorite palces")
      }
        return res.data.match;
    })
}

isLiked(){
    axios.get(`http://localhost:3000/favorites/Isfavorite/${this.props.placeId}`, {withCredentials: true})
    .then(result =>{
      // console.log(result);
      if(result.data == true){
        this.setState({color: red })
      }
    })
}

componentDidMount(){
  this.isLiked();
}

  changeColor(e){
    this.checkloginstatus();
    e.preventDefault();
    // console.log(this.props.placeName);
    let user;
    if (this.props.placeName == undefined){
      user = {
        Event: this.props.eventId, // this.props.eventId
    }
    }else {
      user = {
        Place: this.props.placeId, //this.props.placeId
    }
    }
      if ( this.state.color == gray) {
        this.setState({ color: red })
        // console.log(user);
        axios.post('http://localhost:3000/favorites/add', user,
        {
          withCredentials: true,
      })
      .then(result => {
          console.log(result.data)
      })
      
      .catch(err => 
          {
              // alert(err.response.data.message)
              console.log(err);
          })

      }else{
        this.setState({ color: gray })
        axios.delete('http://localhost:3000/favorites/6037a6e2610adf081759ad82')
        .then( res => {
          console.log(res);
        })
        .catch(err => 
          {
              // alert(err.response.data.message)
              console.log(err);
          })
      }

      // this.setState({ color: newColor })
      console.log(this.props.placeId);
      console.log(this.props.placeName);
    // make post request axios 



    
  }
  render(){
    return(
      <i className="favoritePlace fa fa-heart" onClick={this.changeColor} style={{color: this.state.color}} ></i>
    )
  }
}
