import React, { Component } from 'react';
import axios from 'axios';
import App from "../../App";
import Cards from "../../EventCards";

function CreateEventCards(events) {
        
    return(
        <Cards
            key={events._id}
            theCardId={events._id}
            placeName={events.Name}
            stars={events.Rating}
            PRating={events.PRating}
            img={events.icon} // need uploads file
            status={Status(events.STime, events.ETime)}
            descreption={events.Description}
            wifi={EventType (events.Music, events.Art, events.Food, events.Games)}
        />
    );
}

// Check if the Event is Live or Finished depending on the work hours
function Status (Start, End){
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


export default class Events extends Component {
//constructor elemnts in login
    constructor(props){
        super(props);

//intialy no data enterd // the types are the filters for each place such as music art etc
    this.state = {
            events: [],
            Type1: false,
            Type2: false,
            Type3: false,
            Type4: false,
            Type5: false,
            Type6: false,
            filteredEvents:[],
            noPlaceFound: false,
    }
    this.onChangeMusic = this.onChangeMusic.bind(this);
    this.onChangeArt = this.onChangeArt.bind(this);
    this.onChangeFood= this.onChangeFood.bind(this);
    this.onChangeGames= this.onChangeGames.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
}
componentDidMount(){
    //Get events data, filteredEvents used for filtring and sorting the cards
    axios.get('http://localhost:3000/events')
        .then(resp => {
            console.log(resp)
            this.setState({
                events: resp.data, 
                filteredEvents:resp.data
        })
        // console.log(this.state.events)
        // console.log(this.state.filteredEvents)
    })
}

//========================================================//
// Filters
onChangeMusic(e){
    this.setState({Type1: e.target.checked})
    // console.log(e.target.checked);
    // console.log(this.state.Type1);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredEvents.filter(Type => {return Type.Music === e.target.checked})
        this.setState({ filteredEvents: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.Type2 === true || this.state.Type3 === true || this.state.Type6 === true ){
            copy =this.state.filteredEvents;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.events;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeArt(e){
    this.setState({Type2: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredEvents.filter(Type => {return Type.Art === e.target.checked})
        this.setState({ filteredEvents: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.Type1 === true ||this.state.Type3 === true || this.state.Type6 === true ){
            copy =this.state.filteredEvents;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.events;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeFood(e){
    this.setState({Type3: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredEvents.filter(Type => {return Type.Food === e.target.checked})
        this.setState({ filteredEvents: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.Type1 === true ||this.state.Type2 === true || this.state.Type6 === true ){
            copy =this.state.filteredEvents;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.events;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeGames(e){
    this.setState({Type6: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredEvents.filter(Type => {return Type.Games === e.target.checked})
        this.setState({ filteredEvents: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.Type1 === true ||this.state.Type2 === true || this.state.Type3 === true ){
            copy =this.state.filteredEvents;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.events;
            this.setState({ filteredEvents: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

//========================================================//
// Sort By
onChangePriceRatinglow(e){
    this.setState({Type4: e.target.checked})
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredEvents.sort((a,b) => { return a.PRating.length - b.PRating.length})
        this.setState({ filteredEvents: copy })
        document.getElementById('Type5').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.events;
        this.setState({ filteredEvents: copy })
        this.setState({noPlaceFound: false})
    }
}

onChangePriceRatinghigh(e){
    this.setState({Type5: e.target.checked})
    console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredEvents.sort((a,b) => { return b.PRating.length - a.PRating.length})
        this.setState({ filteredEvents: copy })
        document.getElementById('Type4').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.events;
        this.setState({ filteredEvents: copy })
        this.setState({noPlaceFound: false})
    }
}
//========================================================//

render(){
    
    return(
        <div className="flexthem">
            <div className="Filters">
                <h4 className="FilterTitle">Filters</h4>
                <label className="Label1">Music
                <input className="MusicEvent" type="checkbox"  id="Type1"  onChange={this.onChangeMusic}></input></label>
                <label className="Label1">Art
                <input className="ArtEvent" type="checkbox"  id="Type2"  onChange={this.onChangeArt}></input></label>
                <label className="Label1">Food
                <input className="FoodEvent" type="checkbox"  id="Type3"  onChange={this.onChangeFood}></input></label>
                <label className="Label1">Games
                <input className="GamesEvent" type="checkbox"  id="Type6"  onChange={this.onChangeGames}></input></label>
                <label className="Label2">Sort by: Price</label>
                <label className="Label3" >Lowest to heighest
                <input type="radio" className="RadioBox" id="Type4" onClick={this.onChangePriceRatinglow}></input></label>
                <label className="Label3">heighest to Lowest
                <input type="radio" className="RadioBox" id="Type5" onClick={this.onChangePriceRatinghigh}></input></label>
            </div>
            <div className="general-card"> 
                {this.state.filteredEvents.map(CreateEventCards)}
            </div>
            <h1 className="noPlaceFound" style={{display: this.state.noPlaceFound ? 'block' : 'none' }}> No Event found</h1>
        </div>
    );
}
}


