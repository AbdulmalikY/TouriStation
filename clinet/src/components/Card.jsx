import React, { Component } from 'react';
import Avatar from "./Avatar";
import Detail from "./Detail";
import ReadStars from "./Star-rating";
import Favorite from "./Favorite";
import {Card, Button, Image, Col, Container, Row, Tab, Tabs} from 'react-bootstrap'

function Cards(props) {
  return (
    <div className="cards">
      <div onClick={() => window.location=`/place/${props.placeName}`}> 
      <Avatar img={props.img} /></div>
      <div className="flexCal">
        <div className="flexRow">
          <div className="flexname">
            <h2 className="name">{props.placeName}</h2>
            <div className="ratingPadd">
              <ReadStars value={props.stars} className="star"></ReadStars>
            </div>
          </div>
          <div className="flexfav">
            <h3 className="status" style={{color: props.status == "Open" ? "green" : "red"}} >{props.status}</h3>
            <Favorite placeId={props.theCardId} placeName={props.placeName} className="favorite"></Favorite>
          </div>
        </div>
        <div className="flexTypes">
          <h4 className="Type3"> <span>{props.partition} | </span><span>{props.music} | </span>  <span>{props.wifi}</span></h4>
          <Detail detailInfo={props.descreption} />
        </div>
      </div>
    </div>
  );
}
export default Cards;
