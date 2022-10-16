import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';


import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReadStars from "../Star-rating";
import axios from 'axios'


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

function createEventCardThings(props) {
    return (
        <div class="HomeCard" onClick={event => window.location=`/Events/${props._id}`}>
            <div class="card">
                <img class="img-fluid" alt="100%x280" src={`http://localhost:3000/${props.icon}`} />
            <div class="card-body">
                <h4 class="card-title">{props.Name}</h4>
                <p class="card-text">{props.Description}</p>
                <p><ReadStars value={3} size={20}></ReadStars></p>
                <p> <span style={{"color": "green"}}> Strat Date: </span>August 12, 2020</p>
                <p> <span style={{"color": "red"}}> End Date: </span>April 29, 2021</p>            </div>
        </div>
    </div>
    );
  }

  function createEventCardUpdoming(props) {
    return (
        <div class="HomeCard">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src={`http://localhost:3000/${props.icon}`} />
            <div class="card-body">
                <h4 class="card-title">{props.Name}</h4>
                <p class="card-text">{props.Description}</p>
                {/* <p><ReadStars value={3} size={20}></ReadStars></p> */}
                <p> <span style={{"color": "#A9CCE3"}}> Provided By: </span>Entinrtnaiment company</p>
                <p> <span style={{"color": "green"}}> Strating Date: </span>August 12, 2020</p>
                <div className="form-group">
            <input type="Button" value="Event Page" className="btn btn-primary" />
                 </div>
                </div>
        </div>
    </div>
    );
  }


export default class LoginAdmins extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);





        this.state = {
            Email: '',
            Password: '',
            Events: [],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/events')
        .then(resp => {
          this.setState({Events: resp.data})
          console.log(resp)
        })
        .catch(err => console.log(err))
    }


  


    render(){
        return(

    <div class="container">
        <h1>Things To Do</h1>

       <Carousels
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

   {this.state.Events.map(createEventCardThings)}

                            <div class="HomeCard">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="HomeCard">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="HomeCard">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="HomeCard">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
</Carousels>
<br/>
<br/>
<br/>

<div>

<h1>Upcoming Events</h1>
    <Carousels
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

   {this.state.Events.map(createEventCardUpdoming)}

   
</Carousels>
</div>
      </div>
        )
    }
}
  
