import React, { Component } from 'react';

import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import GoogleButton from 'react-google-button'
import {Card, Button, Image, Col, Container, Row, Tab, Tabs} from 'react-bootstrap'
import {FaUserEdit} from 'react-icons/fa'
import ReactStars from 'react-rating-stars-component'; 
import Cards from "../Card";
import Reviewcard from "../Review-Card";
import FavCard from "../Faviorte-Card-profile";







const ReviewCards = props => (
  <p>{props.review.FavoritePlace}</p>
)

function UserJoinDate(D){
  let y = new Date(D)
  y = y.toDateString().split(' ')
  
return(y[1] + " " + y[2] + ", " + y[3]);
}

function createReviewCard(UserReviews) {
  return (
    <Reviewcard
      key={UserReviews._id}
      id ={UserReviews._id}
      Author={UserReviews.Author}
      SiteName={UserReviews.Reviewsite}
      Rate={UserReviews.Rating}
      Comment={UserReviews.Comment}
      SiteID={UserReviews.ReviewPlace}
      SiteIcon={UserReviews.Icon}
    />
  );
}

function createFavCard(UserFav) {
  return (
    <FavCard
      key={UserFav._id}
      id ={UserFav._id}
      Rate={UserFav.Rating}
      Author={UserFav.Author}
      Comment={UserFav.Description}
      SiteName={UserFav.Name}
      SiteIcon={UserFav.icon}
    />
  );
}
function createCard(resturants) {
  return (
    <Cards
      key={resturants.id}
      name={resturants.name}
      stars={resturants.stars}
      //userRate={resturants.userRate}
      favorite={resturants.favorite}
      types={resturants.types}
      img={resturants.imgURL}
      status={resturants.status}
      descreption={resturants.descreption}
      filters={resturants.filters}
    />
  );
}

export default class RegisterUsers extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


    


//intialy no data enterd
        this.state = {
            UName: '',
            UIcon: '',
            UEmail: '',
            UID: '',
            UDate: '',
            uNumReview: 0,
            review: [],
            Faviorte: [],
            review: [],
            type: '',
            holder: '',
            holderid: '',
            profile: "profile"

        }
    }

    chickowner(){
      return axios.get("http://localhost:3000/isOwnerregister", {withCredentials: true})
      .then(res => {
          if(res.data != false){
              this.setState({
                holder: "owners",
                holderid: res.data
              })
          }
      })
  }

  chickuser(){
    return axios.get("http://localhost:3000/isUserregister", {withCredentials: true})
    .then(res => {
        if(res.data != false){
            this.setState({
              holder: "users",
              holderid: res.data
            })
        }
        return res
    })
    .then(() => console.log("resolved"))

}

  chickadmin(){
     return axios.get("http://localhost:3000/isAdminregister", {withCredentials: true})
      .then(res => {
          if(res.data != false){
              this.setState({
                  holder: "owners",
                  profile: "profiles",
                  holderid: res.data
              })
          }
      })
  }

    checkloginstatus() {
      return axios.get("http://localhost:3000/IsLoged", {withCredentials: true})
      .then(res => {
          if(res.data === false){
              window.location = '/login';
          } else{
            this.setState({ type: res.data.type})
          }
      })
  }

   async componentDidMount(){
  this.chickuser()
  .then(() => this.chickadmin())
  .then(() => this.chickowner())
  .then(() => {
    if(this.state.holder == ''){
      window.location = '/login';
    }else{
      console.log(this.state.holder);
      //Get User Commen
        axios.get(`http://localhost:3000/${this.state.holder}/${this.state.profile}`, {withCredentials: true})
        .then(resp => {
          console.log(resp)
          
          this.setState({
            UName: resp.data.User[0] + " " + resp.data.User[1],
            UIcon: "http://localhost:3000/" + resp.data.User[2],
            UEmail: resp.data.User[3],
            UID: resp.data.User[4],
            UDate: resp.data.User[5],
            review: resp.data.UserReviews,
            Faviorte: resp.data.UserFaviorte,
            uNumReview: resp.data.UserReviews.length,
        
          })
        }).then(()=>
        UserJoinDate(this.state.UDate)
        ).then(() => console.log(this.state.Faviorte))
    }
  })

     

//Chick if User is loged and store type if true



    }


    render(){
        return(

      <div className="profile">

<Container>
  <Row className="UserInfoBlock container" >
    <Col xs={6} md ={4} lg={2}>
    <Image className="Imageprofile" src={this.state.UIcon} />
    </Col>
    <Col className="profileName">
    <Row lg={2} className="UserName">{this.state.UName} </Row>
    <Row lg={2} className="UserEmail"> {this.state.UEmail}</Row>
    </Col>
<FaUserEdit className="fa-3x editicon" onClick={event => window.location="/"}/>
  </Row>

  <Row>
    <div className="card PrfoileInfo">
        <div className="card-header">
            User Info
        </div>
        <div className="card-body">
            <h5 className="card-title">Joining Date:</h5>
        <p className="card-text"> {UserJoinDate(this.state.UDate)}</p>
        </div>
        <div className="card-body">
            <h5 className="card-title">Number of Reviews:</h5>
            <p className="card-text"> {this.state.uNumReview} Reviews</p>
        </div>

    </div>
    <div className="ProfileFav">
    <Tabs defaultActiveKey="Reviews" id="uncontrolled-tab-example">
  <Tab eventKey="Faviortes" title="Faviortes">

  {this.state.Faviorte.map(createFavCard)}

 </Tab>
  <Tab eventKey="Reviews" title="Reviews">

<div>
   {this.state.review.map(createReviewCard)}
 </div>

  </Tab>
</Tabs>
    </div>
  </Row>
  <Row>

  </Row>
</Container>
  </div>
        )
    }
}
