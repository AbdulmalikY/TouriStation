import React, { Component, useEffect } from "react";

import App from "../App";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import GoogleButton from "react-google-button";
import {
  Card,
  Button,
  Image,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  footer,
  Carousel,
} from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import Cards from "../Card";
import Reviewcard from "../Review-Card";

import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import image from "./riyadhhome.jpg";
import KingdomIcon from "../images/noun_kingdom centre_2875325.svg";
import MakkahIcon from "../images/noun_kaaba direction_3777436.svg";
import SaudiFlagIcon from "../images/SaudiFlagIcon.png";
import MBS from "../images/MohammedBinSalman.jpeg";
import KingFaisle from "../images/KingFaisle.jpeg";
import KingKhaled from "../images/KingKhaled.jpeg";

import TouriesmMinstry from "../images/366678.svg";
import Seasons from "../images/369746.svg";
import SsudiVision from "../images/Vision.svg";
import resturantsimage from "../images/resturants&caffes.jpeg";
import Eventsimage from "../images/Events.jpeg";
import Accomdationimage from "../images/Accomdationimage.jpeg";
import Hestoricimage from "../images/Hestoric.jpeg";
import Extra from "../images/Extra.jpeg";
import Malls from "../images/Malls.jpeg";

import Carousels from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReadStars from "../Star-rating";
import WeatherWidget from "../Weather";

// const HtmlToReactParser = require('html-to-react').Parser;

//Used dor cousal show cards
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function EventsDate(D) {
  let y = new Date(D);
  y = y.toDateString().split(" ");

  return y[1] + " " + y[2] + ", " + y[3];
}

function Currentevent(event) {
  let Currentevent = [];
  const date = new Date();
  for (let i = 0; i < event.length; i++) {
    const StartDate = new Date(event[i].STime);
    const EndDate = new Date(event[i].ETime);

    if (date >= StartDate && date <= EndDate) {
      Currentevent.push(event[i]);
    }
  }
  return Currentevent;
}

function upcomimgevent(event) {
  let upcomingevent = [];
  const date = new Date();
  for (let i = 0; i < event.length; i++) {
    const element = new Date(event[i].STime);
    if (date < element) {
      upcomingevent.push(event[i]);
    }
  }
  return upcomingevent;
}

function sub(p) {
  console.log(p.length);
  const stri = String(p).substr(0, 60);
  console.log(stri);
  return stri;
}
//Things To do create card
function createEventCardThings(props) {
  return (
    <div class="HomeCard">
      <div class="card">
        <img
          class="img-fluid HomeCardImage"
          alt="100%x280"
          src={`http://localhost:3000/images/${props.icon}`}
          onClick={(event) => (window.location = `/Event/${props.Name}`)}
        />
        <div class="card-body">
          <h4 class="card-title">{props.Name}</h4>
          <p class="card-text">{sub(props.Description)}</p>
          <p>
            <ReadStars value={props.Rating} size={25}></ReadStars>
          </p>
          <p>
            {" "}
            <span style={{ color: "green" }}> Strat Date: </span>
            {EventsDate(props.STime)}
          </p>
          <p>
            {" "}
            <span style={{ color: "red" }}> End Date: </span>
            {EventsDate(props.ETime)}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

//Updoming section cards
function createEventCardUpdoming(props) {
  return (
    <div class="HomeCard">
      <div class="card">
        <img
          class="img-fluid HomeCardImage"
          alt="100%x280"
          src={`http://localhost:3000/images/${props.icon}`}
          onClick={(event) => (window.location = `/Event/${props.Name}`)}
        />
        <div class="card-body">
          <h4 class="card-title">{props.Name}</h4>
          <p class="card-text">{sub(props.Description)}</p>
          <p>
            {" "}
            <span style={{ color: "#A9CCE3" }}> Provided By: </span>
            {props.ProvidedBy}
          </p>
          <p>
            {" "}
            <span style={{ color: "green" }}> Strating Date: </span>
            {EventsDate(props.STime)}
          </p>
          <div className="form-group">
            <input
              type="Button"
              value="Event Page"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// function getvalues(e){
//   let  now = new Date();
//   for (let i = 0; i < e.length; i++) {
//     const element = e[i];
//     if (element.STime < now) {
//       console.log("element")
//     }
//   }
// }

const ReviewCards = (props) => <p>{props.review.FavoritePlace}</p>;

export default class RegisterUsers extends Component {
  //constructor elemnts in login
  constructor(props) {
    super(props);

    //intialy no data enterd
    this.state = {
      image: image,
      Events: [],
      Upcoming: [],
      current: [],
      weather: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/events")
      .then((resp) => {
        this.setState({ Events: resp.data });
        this.setState({ Upcoming: upcomimgevent(this.state.Events) });
        this.setState({ current: Currentevent(this.state.Events) });
      })
      .catch((err) => console.log(err));

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=riyadh&APPID=2a6d8bf9b2f6cc7c4df6763fcc95ae65&units=metric"
      )
      .then((res) => {
        this.setState({ weather: res.data.main.temp });
      });
  }

  render() {
    return (
      <div>
        {/* TouriStation icons section */}
        <section Class="features ">
          <div class="row">
            <div class="feature-box col-lg-4 col-md-6">
              <img src={KingdomIcon} class="TouriIcons" />
              <h3>Artistic Approach</h3>
              <p>Saudi Arabia plan to change the way cities are contructed.</p>
            </div>
            <div class="feature-box col-lg-4 col-md-6">
              <img src={MakkahIcon} class="TouriIcons" />
              <h3>Musliems Stations</h3>
              <p>
                Makkah is the islamic center to all musilims around the world.
              </p>
            </div>
            <div class="feature-box col-lg-4 col-md-6">
              <img src={SaudiFlagIcon} class="TouriIcons saudiflag" />
              <h3>Ancient Heritage.</h3>
              <p>
                Heritage Culture has been passed through hundereds genrations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Section Pictures 3S */}
        <section class="Mainsection">
          <div class="row">
            <a href="/resturants">
              <div class="SectionImg">
                <div class="col-lg-3 col-md-5 section-box">
                  <img
                    src={resturantsimage}
                    class="sectionimg"
                    alt="iphone-mockup"
                  />
                </div>
                <div class="centeredText">Resturants & Caffes</div>
              </div>
            </a>
            <a href="/events">
              <div class="SectionImg">
                <div class="col-lg-3 col-md-5 section-box">
                  <img
                    src={Eventsimage}
                    class="sectionimg"
                    alt="iphone-mockup"
                  />
                </div>
                <div class="centeredText">Events</div>
              </div>
            </a>
            <a href="/touristic">
              <div class="SectionImg">
                <div class="col-lg-3 col-md-5 section-box">
                  <img
                    src={Hestoricimage}
                    class="sectionimg"
                    alt="iphone-mockup"
                  />
                </div>
                <div class="centeredText">Touristic</div>
              </div>
            </a>
            <a href="/accommodations">
              <div class="SectionImg">
                <div class="col-lg-3 col-md-5 section-box">
                  <img
                    src={Accomdationimage}
                    class="sectionimg"
                    alt="iphone-mockup"
                  />
                </div>
                <div class="centeredText">Accomdation</div>
              </div>
            </a>
            <a href="/malls">
              <div class="SectionImg">
                <div class="col-lg-3 col-md-4 section-box">
                  <img src={Malls} class="sectionimg" alt="iphone-mockup" />
                </div>
                <div class="centeredText">Malls</div>
              </div>
            </a>
            <a href="/extraservices">
              <div class="SectionImg">
                <div class="col-lg-3 col-md-4 section-box">
                  <img src={Extra} class="sectionimg" alt="iphone-mockup" />
                </div>
                <div class="centeredText">Extra Services</div>
              </div>
            </a>
          </div>
        </section>

        <section id="testimonials">
          <Carousel id="testmonials-carousel" data-ride="false">
            <Carousel.Item>
              <h2>The Middle East is the new Europe</h2>
              <img
                class="testimonials-img"
                src={MBS}
                alt="Crown Prince Image"
              />
              <em>Mohammed Bin Salmans</em>
            </Carousel.Item>
            <Carousel.Item>
              <h2>
                If I wasent <span style={{ "font-weight": "bold" }}>King</span>,
                I will be a{" "}
                <span style={{ "font-weight": "bold" }}>Teacher</span> .
              </h2>
              <img
                class="testimonials-img"
                src={KingFaisle}
                alt="Crown Prince Image"
              />
              <em>King Fiseal </em>
            </Carousel.Item>
            <Carousel.Item>
              <h2>
                The Saudi people are blessed with the heritage of their ancient
                country.
              </h2>
              <img
                class="testimonials-img"
                src={KingKhaled}
                alt="dog-profile"
              />
              <em>King Khalid</em>
            </Carousel.Item>
          </Carousel>
        </section>

        <section id="press">
          <img class="press-logo" src={SsudiVision} alt="SaudiVision Logo" />
          <img class="press-logo" src={Seasons} alt="Saudi Sesaons logo" />
          <img
            class="press-logo"
            src={TouriesmMinstry}
            alt="Ministry of Touriesm logo"
          />
        </section>

        <section id="ThingsToDo">
          <h2>Things To Do</h2>

          {/* THINGS TO DO SECTION */}
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
            {this.state.current.map(createEventCardThings)}
          </Carousels>
        </section>

        <section id="pricing">
          <h2>A Trip Plan for Every Suite Touriests Needs</h2>
          <p>Simple and affordable price plans for you and your Familiy.</p>
          <div class="row">
            <div class="pricing-column col-lg-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h3>Riyadh Night</h3>
                </div>
                <div class="card-body">
                  <h2>$</h2>
                  <p>One Days in Riydah</p>
                  <p>Include Saudian Nice Food</p>
                  <p>Familiy Friendly</p>
                  <button
                    class="btn btn-lg btn-block btn-outline-dark"
                    type="button"
                  >
                    View Trip
                  </button>
                </div>
              </div>
            </div>
            <div class="pricing-column col-lg-4 col-md-6">
              <div class="card">
                <div class="card-header">
                  <h3>Edge Of the World</h3>
                </div>
                <div class="card-body">
                  <h2>$$</h2>
                  <p>Two Day In Riyadh</p>
                  <p>Include Nice Food and Hestoric </p>
                  <p>Unlimited App Usage</p>
                  <button class="btn btn-lg btn-block btn-dark" type="button">
                    View Trip
                  </button>
                </div>
              </div>
            </div>
            <div class="pricing-column col-lg-4">
              <div class="card">
                <div class="card-header">
                  <h3>Riyadh shopping</h3>
                </div>
                <div class="card-body">
                  <h2>$$$</h2>
                  <p>Best Riyadh Shoping malls</p>
                  <p>weakly shoping event</p>
                  <p>Eat at Riyadh fainest Resturants</p>
                  <button class="btn btn-lg btn-block btn-dark" type="button">
                    View Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
          <WeatherWidget></WeatherWidget>
        </section>

        {/* UPDOMING SECTION */}
        <section id="Upcoming">
          <h2>Updoming Events </h2>
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
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {this.state.Upcoming.map(createEventCardUpdoming)}
          </Carousels>
        </section>

        <footer id="footer">
          <AiOutlineInstagram
            className="social-icon"
            onClick={() =>
              window.open("https://www.instagram.com/touristations/")
            }
          />
          <FiTwitter
            className="social-icon"
            onClick={() => window.open("https://twitter.com/touristations/")}
          />
          <HiOutlineMail
            className="social-icon"
            onClick={() => window.open("mailto:touristations@gmail.com")}
          />

          <br />

          <p>© Copyright 2021 TouriStation</p>
        </footer>
      </div>
    );
  }
}
