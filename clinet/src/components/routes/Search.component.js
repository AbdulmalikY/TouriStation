import React, { Component } from 'react';
import axios from 'axios';
import App from "../App";
import Cards from "../Card";

function CreateCards(resturants) {


        
    return(
        <Cards
            key={resturants._id}
            theCardId={resturants._id}
            placeName={resturants.Name}
            stars={resturants.Rating}
            PRating={resturants.PRating}
            img={resturants.icon} // need uploads file
            status={Status(resturants.OpenTime, resturants.CloseTime)}
            descreption={resturants.Description}
        />
    );
}

function CreateEventCards(events) {
        
    return(
        <Cards
            key={events._id}
            theCardId={events._id}
            placeName={events.Name}
            stars={events.Rating}
            PRating={events.PRating}
            img={events.icon} // need uploads file
            status={EventStatus(events.STime, events.ETime)}
            descreption={events.Description}
            wifi={EventType (events.Music, events.Art, events.Food, events.Games)}
        />
    );
}

// Check if the Event is Live or Finished depending on the work hours
function EventStatus (Start, End){
    const date = new Date(); // current date
    let StartDate = new Date (Start);
    let EndDate = new Date (End);
    if ((StartDate <= date) && (date < EndDate)){
        return "Live";
    }else{
   if(StartDate > date){
       return "Upcoming"
   }else{
    return "Finished";

   }
    }
}

//Handel the Music, Art, Food, Games (to transfer it from bolean form into string)   
function EventType (EMusic, EArt, EFood, EGames){
    if(EMusic == true){
        return "Music";
    }else{
        if(EArt == true){
            return "Art";
        }else{
            if (EFood == true){
                return "Food";
            }else{
                if (EGames == true){
                return "Games";
            }
        }
    }
}
}
// Check if the place is open or closed depending on the work hours
function Status (Open, Close){
    const date = new Date();
    var hours = date.getHours();
    const red = 'red';
    const green = 'green';
    if ((Open <= hours) && (hours < Close)){
        return "Open";
    }else{
        return "Close";
    }
}


export default class Search extends Component {
//constructor elemnts in login
    constructor(props){
        super(props);

//intialy no data enterd // the types are the filters for each place such as music wifi etc
    this.state = {
            resturants: [],
            searchvalue: this.props.location.search,
            Type1: false,
            Type2: false,
            Type3: false,
            Type4: false,
            Type5: false,
            filteredRestraunts:[],
            filteredEvents:[],
            noPlaceFound: false
    }
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
}
componentDidMount(){
    console.log(this.props.match.params.place)
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios.get('http://localhost:3000/places/Search/'+this.props.match.params.place)
        .then(resp => {
            console.log(resp)
            this.setState({
                resturants: resp.data.places, 
                filteredRestraunts:resp.data.places,
                filteredEvents: resp.data.Events
        })
        // console.log(this.state.resturants)
        // console.log(this.state.filteredRestraunts)
    })
}

//========================================================//
// Filters

//========================================================//
// Sort By
onChangePriceRatinglow(e){
    this.setState({Type4: e.target.checked})
    console.log(this.state.Type4);
    let copy;
    if(this.state.Type4 === true){
        copy =  this.state.filteredRestraunts.sort((a,b) => { return a.PRating.length - b.PRating.length})
        this.setState({ filteredRestraunts: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.resturants;
        this.setState({ filteredRestraunts: copy })
        this.setState({noPlaceFound: false})
    }
}

onChangePriceRatinghigh(e){
    this.setState({Type5: e.target.checked})
    console.log(this.state.Type5);
    let copy;
    if(this.state.Type5 === true){
        copy =  this.state.filteredRestraunts.sort((a,b) => { return b.PRating.length - a.PRating.length})
        this.setState({ filteredRestraunts: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.resturants;
        this.setState({ filteredRestraunts: copy })
        this.setState({noPlaceFound: false})
    }
}
//========================================================//

render(){
    
    return(
        <div className="flexthem">
            <div className="Filters">
                <label className="Label2">Sort by: Price</label>
                <label className="Label3" >Lowest to heighest
                <input type="radio" className="RadioBox" id="Type4" onClick={this.onChangePriceRatinglow}></input></label>
                <label className="Label3">heighest to Lowest
                <input type="radio" className="RadioBox" id="Type5" onClick={this.onChangePriceRatinghigh}></input></label>
            </div>
            <div>
            <div className="general-card"> 
            <h1 style={{display: this.state.filteredRestraunts.length >= 1 ? 'block' : 'none' }}>Places</h1> 
                {this.state.filteredRestraunts.map(CreateCards)}
            </div>
            <div className="general-card"> 
            <h1 style={{display: this.state.filteredEvents.length > 0 ? 'block' : 'none' }}>Events </h1> 
                {this.state.filteredEvents.map(CreateEventCards)}
            </div>
            </div>
            <h1 className="noPlaceFoundSearch" style={{display: this.state.filteredRestraunts.length == 0 && this.state.filteredEvents.length == 0 ? 'block' : 'none' }}> No place found</h1>
        </div>
    );
}
}
