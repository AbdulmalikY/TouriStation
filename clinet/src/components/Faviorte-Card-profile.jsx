import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import ReadStars from "./Star-rating";
import Favorite from "./Favorite";
import {Card, Button, Image, Col, Container, Row, Tab, Tabs} from 'react-bootstrap'

function FavCard(props){
    return(
       <div className="profileCard">
          <Card className="ReviewCard">
            <Card.Header as="h5" className="ReviewHeader">
              <img className="reviewimg" src={`http://localhost:3000/${props.SiteIcon}`}  onClick={e => window.location=`/Place/${props.id}`}/>
              {props.SiteName}
              <Favorite placeId={props.id} className="favorite"></Favorite> 

              <div className="reviewStar">
              <ReadStars value={props.Rate} size={20}></ReadStars>
              </div>
            </Card.Header>
            
            <Card.Body className="CardBody">
              <Card.Title>     
                {props.Author}
              </Card.Title>
              <Card.Text>
              {props.Comment}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
  }

export default FavCard;

