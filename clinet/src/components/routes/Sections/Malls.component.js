import React, { Component } from 'react';
import axios from 'axios';
import App from "../../App";
import Cards from "../../Card";

function CreateCards(malls) {

//Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
    let ifChildgames;
    let ifWifi;
    let ifCinema;

    if (malls.Type2 == true){
        ifChildgames = "Games Center";
    }else{
        ifChildgames = "No Games Center";
    }

    if (malls.Type3 == true){
        ifWifi = "Wifi";
    }else{
        ifWifi = "No Wifi";
    }

    if (malls.Type1 == true){
        ifCinema = "Cinema";
    }else{
        ifCinema = "No Cinema";
    }
        
    return(
        <Cards
            key={malls._id}
            theCardId={malls._id}
            placeName={malls.Name}
            stars={malls.Rating}
            PRating={malls.PRating}
            music= {ifChildgames}
            img={malls.icon}
            status={Status(malls.OpenTime, malls.CloseTime)}
            descreption={malls.Description}
            wifi={ifWifi}
            partition={ifCinema}
        />
    );
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


export default class Malls extends Component {
//constructor elemnts in login
    constructor(props){
        super(props);

//intialy no data enterd // the types are the filters for each place such as music wifi etc
    this.state = {
            malls: [],
            TypeOne: false,
            TypeTwo: false,
            TypeThree: false,
            Type4: false,
            Type5: false,
            filteredMalls:[],
            noPlaceFound: false
    }
    this.onChangeChildGames= this.onChangeChildGames.bind(this);
    this.onChangeWifi = this.onChangeWifi.bind(this);
    this.onChangeCinema = this.onChangeCinema.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
}
componentDidMount(){
    //Get malls data, filteredMalls used for filtring and sorting the cards
    axios.get('http://localhost:3000/places/sections/malls')
        .then(resp => {
            console.log(resp)
            this.setState({
                malls: resp.data, 
                filteredMalls:resp.data
        })
        // console.log(this.state.malls)
        // console.log(this.state.filteredMalls)
    })
}

//========================================================//
// Filters
onChangeChildGames(e){
    this.setState({TypeOne: e.target.checked})
    // console.log(e.target.checked);
    // console.log(this.state.TypeOne);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredMalls.filter(Type => {return Type.Type2 === e.target.checked})
        this.setState({ filteredMalls: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeTwo === true ||this.state.TypeThree === true ){
            copy =this.state.filteredMalls;
            this.setState({ filteredMalls: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.malls;
            this.setState({ filteredMalls: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeWifi(e){
    this.setState({TypeTwo: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredMalls.filter(Type => {return Type.Type3 === e.target.checked})
        this.setState({ filteredMalls: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true ||this.state.TypeThree === true ){
            copy =this.state.filteredMalls;
            this.setState({ filteredMalls: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.malls;
            this.setState({ filteredMalls: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeCinema(e){
    this.setState({TypeThree: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredMalls.filter(Type => {return Type.Type2 === e.target.checked})
        this.setState({ filteredMalls: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true ||this.state.TypeTwo === true ){
            copy =this.state.filteredMalls;
            this.setState({ filteredMalls: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.malls;
            this.setState({ filteredMalls: copy })
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
        copy =  this.state.filteredMalls.sort((a,b) => { return a.PRating.length - b.PRating.length})
        this.setState({ filteredMalls: copy })
        document.getElementById('Type5').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.malls;
        this.setState({ filteredMalls: copy })
        this.setState({noPlaceFound: false})
    }
}

onChangePriceRatinghigh(e){
    this.setState({Type5: e.target.checked})
    console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredMalls.sort((a,b) => { return b.PRating.length - a.PRating.length})
        this.setState({ filteredMalls: copy })
        document.getElementById('Type4').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.malls;
        this.setState({ filteredMalls: copy })
        this.setState({noPlaceFound: false})
    }
}
//========================================================//

render(){
    
    return(
        <div className="flexthem">
            <div className="Filters">
                <h4 className="FilterTitle">Filters</h4>
                <label className="Label1">Games
                <input className="GameMalls" type="checkbox"  id="TypeOne"  onChange={this.onChangeChildGames}></input></label>
                <label className="Label1">Wifi
                <input className="WifiMalls" type="checkbox"  id="TypeTwo"  onChange={this.onChangeWifi}></input></label>
                <label className="Label1">Cinema
                <input className="CinemaMalls" type="checkbox"  id="TypeThree"  onChange={this.onChangeCinema}></input></label>
                <label className="Label2">Sort by: Price</label>
                <label className="Label3" >Lowest to heighest
                <input type="radio" className="RadioBox" id="Type4" onClick={this.onChangePriceRatinglow}></input></label>
                <label className="Label3">heighest to Lowest
                <input type="radio" className="RadioBox" id="Type5" onClick={this.onChangePriceRatinghigh}></input></label>
            </div>
            <div className="general-card"> 
                {this.state.filteredMalls.map(CreateCards)}
            </div>
            <h1 className="noPlaceFound" style={{display: this.state.noPlaceFound ? 'block' : 'none' }}> No place found</h1>
        </div>
    );
}
}


