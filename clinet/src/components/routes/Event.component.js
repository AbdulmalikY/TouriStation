import React, { Component } from 'react';

import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import GoogleButton from 'react-google-button'
import {Card, Button, Image, Col, Container, Row, Tab, Tabs, footer, Carousel} from 'react-bootstrap'
import {FaUserEdit} from 'react-icons/fa'
import ReactStars from 'react-rating-stars-component'; 
import Cards from "../Card";
import Reviewcard from "../Review-Card";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdDescription } from "react-icons/md";


import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";

import { RiDoorOpenFill } from "react-icons/ri";


import { DiChrome } from "react-icons/di";
import { IoLocationOutline } from "react-icons/io5";



import { GiTakeMyMoney } from "react-icons/gi";
import { FiTwitter } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";



import Favorites from "../Faviortes";





import image from "./riyadhhome.jpg"
import KingdomIcon from "../images/noun_kingdom centre_2875325.svg"
import MakkahIcon from "../images/noun_kaaba direction_3777436.svg"
import SaudiFlagIcon from "../images/SaudiFlagIcon.png"
import MBS from "../images/MohammedBinSalman.jpeg"
import KingFaisle from "../images/KingFaisle.jpeg"
import KingKhaled from "../images/KingKhaled.jpeg"


import TouriesmMinstry from "../images/366678.svg"
import Seasons from "../images/369746.svg"
import SsudiVision from "../images/Vision.svg"
import resturantsimage from "../images/resturants&caffes.jpeg"
import Eventsimage from "../images/Events.jpeg"
import Accomdationimage from "../images/Accomdationimage.jpeg"
import Hestoricimage from "../images/Hestoric.jpeg"
import Extra from "../images/Extra.jpeg"
import Malls from "../images/Malls.jpeg"

import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReadStars from "../Star-rating";



// const HtmlToReactParser = require('html-to-react').Parser;


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

//Used dor cousal show cards
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



function UserJoinDate(D){
    let y = new Date(D)
    y = y.toDateString().split(' ')
    
  return(y[1] + " " + y[2] + ", " + y[3]);
  }



//Things To do create card
function PlaceImages(props) {

  return (
          <div class="card" >
              <img class="" alt="100%x280" src={`http://localhost:3000/images/${props}`} style={{width: "358px", height: "200px"}}/>
          </div>
  );
}
 



const ReviewCards = props => (
  <p>{props.review.FavoritePlace}</p>
)


export default class Event extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


      
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);




//intialy no data enterd
        this.state = {
          id: '',
          Name: '',
          Description: '',
          Phone: '',
          Website: '',
          Instagram: '',
          Twitter: '',
          PRating: '',
          Rating: 0,
          Image: '',
          OpenTime: '',
          STime: '',
          ETime: '',
          City: '',
          Street: '',
          ZibCode: '',
          Photos: [],
          Reviews: [],
          rrating: 0,
          comment: '',
          Owner: false,
          Admin: false,
          User: false,
          holderid: '',
        }
    }

    chickowner(){
      axios.get("http://localhost:3000/isOwnerregister", {withCredentials: true})
      .then(res => {
          if(res.data != false){
              this.setState({
                  Owner: true,
                  holderid: res.data
              })
          }
      })
  }

  chickuser(){
    axios.get("http://localhost:3000/isUserregister", {withCredentials: true})
    .then(res => {
        if(res.data != false){
            this.setState({
                User: true,
                holderid: res.data
            })
        }
    })
}

  chickadmin(){
      axios.get("http://localhost:3000/isAdminregister", {withCredentials: true})
      .then(res => {
          if(res.data != false){
              this.setState({
                  Admin: true,
                  holderid: res.data
              })
          }
      })
  }
  ratingChanged(){
      this.setState({Rating: this.state.Rating})
  }

    componentDidMount(){

        this.chickuser();
        this.chickadmin();
        this.chickowner(); 

      
      axios.get('http://localhost:3000/events/One/'+this.props.match.params.event)
      .then(resp => {
      console.log(resp.data)
      this.setState({
          id: resp.data.PlaceInformation._id,
          Name: resp.data.PlaceInformation.Name,     
          Description: resp.data.PlaceInformation.Description,
          Phone: resp.data.PlaceInformation.Phone,
          Website: resp.data.PlaceInformation.Website,
          Instagram: resp.data.PlaceInformation.Instgram,
          Twitter: resp.data.PlaceInformation.Twitter,
          PRating: resp.data.PlaceInformation.PRating,
          Rating: resp.data.PlaceInformation.Rating,
          OpenTime: resp.data.PlaceInformation.STime,
          CloseTime: resp.data.PlaceInformation.ETime,
          Image: resp.data.PlaceInformation.icon,
          Photos: resp.data.PlaceInformation.photos,
          GoogleMap: resp.data.PlaceLocation.GoogleMap,
          City: resp.data.PlaceLocation.City,
          Street: resp.data.PlaceLocation.Street,
          ZibCode: resp.data.PlaceLocation.ZibCode,
          Reviews: resp.data.PlaceReviews,
  })
      })
      .catch(err => console.log(err))

  }
 


  onChangeValue(e){
    console.log(this.state.Rating)
    this.setState({rrating: e})
  }
  onChangeComment(e) {
    this.setState({
            comment: e.target.value
        });
}

async onSubmit(e) {

  e.preventDefault();


  let user

const formData = new FormData();


  if(this.state.User){
    // formData.append('ReviewUser', this.state.holderid);
    user = {
      User: this.state.holderid,
      Comment: this.state.comment,
      Rating: this.state.rrating,
      Place: this.state.id,
  }
}
  if(this.state.Owner){
    user = {
      Owner: this.state.holderid,
      Comment: this.state.comment,
      Rating: this.state.rrating,
      Place: this.state.id,
  }
}

if(this.state.Admin){
  user = {
    Admin: this.state.holderid,
    Comment: this.state.comment,
    Rating: this.state.rrating,
    Place: this.state.id,
}}

if(!this.state.Owner && !this.state.User && !this.state.Admin){
  alert("You have to be loged in to review places")

}else{

await axios.post('http://localhost:3000/reviews/add', user,{
   withCredentials: true,
})
.then(res => {
    alert("Your Review is saved")
})
.catch(err => 
{
  alert(err.response.data.message)
})
}
}
    render(){
        return(
            <div>
            <div class="container py-4" style={{"background-color": "white", marginTop: "2%"}}>
  
              <div class="p-5 mb-4 bg-light rounded-3">
              <div class="container py-3">
              <div class="row">
              <div class="col-md-8 col-sm-6 col-lg-10 row">
              <img className="placeimg" src={`http://localhost:3000/images/${this.state.Image}`}  />
              <h1 class="display-5 fw-bold place-info">{this.state.Name}
              <ReactStars 
            value={this.state.Rating}
            count={5}
            size={25}
            edit={true}
            isHalf={true}
            onChange={this.ratingChanged}
            activeColor="#ffea00"
        />      </h1></div>
              <Favorites placeId={this.state.id} class="favoritePlace"></Favorites> 
          </div>
    </div>    
  </div>




<div style={{margin: "0 0px 20px 0px" }}>      
   <Carousels
       swipeable={true}
       draggable={false}
       showDots={true}
       responsive={responsive}
       ssr={true} // means to render carousel on server-side.
       infinite={true}
       autoPlay={this.props.deviceType !== "mobile" ? true : false}
       autoPlaySpeed={5000}     
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
       deviceType={this.props.deviceType}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
      >

   {this.state.Photos.map(PlaceImages)}

</Carousels>
</div>


    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-info rounded-3">
        <p style={{color: "#fff"}}><MdDescription style={{fontSize: "30px"}}/> {this.state.Description}</p> 
        <p style={{color: "#fff"}}><RiDoorOpenFill style={{fontSize: "30px", }}/> {UserJoinDate(this.state.OpenTime)} - {UserJoinDate(this.state.CloseTime)} </p> 
        <p style={{color: "#fff", letterSpacing: "3px"}} > <GiTakeMyMoney style={{fontSize: "30px"}}/>{this.state.PRating}</p> 
        <p style={{color: "#fff"}} >  <FiPhone style={{fontSize: "30px"}}/>{this.state.Phone}</p>
        <p style={{color: "#fff"}} onClick={() => window.open(this.state.Instagram)}> <AiOutlineInstagram style={{fontSize: "30px"}}/>{this.state.Instagram}</p>
        <p style={{color: "#fff"}} onClick={() => window.open(this.state.Twitter)}>  <FiTwitter style={{fontSize: "30px"}}/>  {this.state.Twitter}</p>
        <p style={{color: "#fff"}} onClick={() => window.open(this.state.Website)}>  <DiChrome style={{fontSize: "30px"}}/> {this.state.Website}</p>
        <p style={{color: "#fff"}} >  <IoLocationOutline style={{fontSize: "30px"}}/>  {this.state.City} {this.state.Street}, {this.state.ZibCode}</p> 
        </div>
      </div>
      <div class="col-md-6 MapIframe"> 
      <iframe
              src={this.state.GoogleMap}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{"border" :"0"}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
       </div>
    </div>

    <div class="pt-3 mt-4 text-muted border-top">

    </div>

    <div>
      <form onSubmit={this.onSubmit}>
    <div className="profileCard" style={{marginBottom: "5%"}}>
          <Card className="ReviewCard">
            <Card.Header as="h5" className="ReviewHeader">
              <div style={{marginBottom: "1%"}}>
              <ReactStars 
            value={this.state.rrating}
            count={5}
            size={25}
            edit={true}
            isHalf={false}
            onChange={this.onChangeValue}
            activeColor="#ffea00"
        />     </div>
        <label>Review</label>
        <div class="form-row">
              <input type="text" class="form-control col-md-11" value={this.state.comment} onChange={this.onChangeComment} placeholder="Write Your Review..."/>
              {/* <Button variant=" btn-info col-md-1">Submit</Button> */}
              <input type="submit" value= "Submit" className="btn btn-info col-md-1" />

              </div>

            </Card.Header>
            
          </Card>
          
        </div>
        </form>


    {this.state.Reviews.map(createReviewCard)}

    </div>
  </div>
</div>
   
        )
    }
}
