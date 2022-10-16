import React, { Component } from 'react';
import axios from 'axios';
import App from "../../App";
import Cards from "../../Card";

function CreateCards(accommodations) {

//Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
    let ifGym;
    let ifWifi;
    let ifBreakfast;

    // the order of types to which specifc type, for example to know Type1 is why for wifi here, check the db order

    if (accommodations.Type2 == true){
        ifGym = "Gym";
    }else{
        ifGym = "No Gym";
    }

    if (accommodations.Type1 == true){
        ifWifi = "Wifi";
    }else{
        ifWifi = "No Wifi";
    }

    if (accommodations.Type3 == true){
        ifBreakfast = "Breakfast";
    }else{
        ifBreakfast = "No Breakfast";
    }
        
    return(
        <Cards
            key={accommodations._id}
            theCardId={accommodations._id}
            placeName={accommodations.Name}
            stars={accommodations.Rating}
            PRating={accommodations.PRating}
            music= {ifGym}
            img={accommodations.icon}
            status={Status(accommodations.OpenTime, accommodations.CloseTime)}
            descreption={accommodations.Description}
            wifi={ifWifi}
            partition={ifBreakfast}
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


export default class Accommodations extends Component {
//constructor elemnts in login
    constructor(props){
        super(props);

//intialy no data enterd // the types are the filters for each place such as music wifi etc
    this.state = {
            accommodations: [],
            TypeOne: false,
            TypeTwo: false,
            TypeThree: false,
            Type4: false,
            Type5: false,
            filteredAccommodations:[],
            noPlaceFound: false
    }
    this.onChangeGym= this.onChangeGym.bind(this);
    this.onChangeWifi = this.onChangeWifi.bind(this);
    this.onChangeBreakfast = this.onChangeBreakfast.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
}
componentDidMount(){
    //Get accommodations data, filteredAccommodations used for filtring and sorting the cards
    axios.get('http://localhost:3000/places/sections/accommodations')
        .then(resp => {
            console.log(resp)
            this.setState({
                accommodations: resp.data, 
                filteredAccommodations:resp.data
        })
        // console.log(this.state.accommodations)
        // console.log(this.state.filteredAccommodations)
    })
}

//========================================================//
// Filters
onChangeGym(e){
    this.setState({TypeOne: e.target.checked})
    // console.log(e.target.checked);
    // console.log(this.state.TypeOne);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredAccommodations.filter(Type => {return Type.Type2 === e.target.checked})
        this.setState({ filteredAccommodations: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeTwo === true ||this.state.TypeThree === true ){
            copy =this.state.filteredAccommodations;
            this.setState({ filteredAccommodations: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.accommodations;
            this.setState({ filteredAccommodations: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeWifi(e){
    this.setState({TypeTwo: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredAccommodations.filter(Type => {return Type.Type1 === e.target.checked})
        this.setState({ filteredAccommodations: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true ||this.state.TypeThree === true ){
            copy =this.state.filteredAccommodations;
            this.setState({ filteredAccommodations: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.accommodations;
            this.setState({ filteredAccommodations: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeBreakfast(e){
    this.setState({TypeThree: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredAccommodations.filter(Type => {return Type.Type3 === e.target.checked})
        this.setState({ filteredAccommodations: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true ||this.state.TypeTwo === true ){
            copy =this.state.filteredAccommodations;
            this.setState({ filteredAccommodations: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.accommodations;
            this.setState({ filteredAccommodations: copy })
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
        copy =  this.state.filteredAccommodations.sort((a,b) => { return a.PRating.length - b.PRating.length})
        this.setState({ filteredAccommodations: copy })
        document.getElementById('Type5').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.accommodations;
        this.setState({ filteredAccommodations: copy })
        this.setState({noPlaceFound: false})
    }
}

onChangePriceRatinghigh(e){
    this.setState({Type5: e.target.checked})
    console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredAccommodations.sort((a,b) => { return b.PRating.length - a.PRating.length})
        this.setState({ filteredAccommodations: copy })
        document.getElementById('Type4').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.accommodations;
        this.setState({ filteredAccommodations: copy })
        this.setState({noPlaceFound: false})
    }
}
//========================================================//

render(){
    
    return(
        <div className="flexthem">
            <div className="Filters">
                <h4 className="FilterTitle">Filters</h4>
                <label className="Label1">Gym
                <input className="GymAcc" type="checkbox"  id="TypeOne"  onChange={this.onChangeGym}></input></label>
                <label className="Label1">Wifi
                <input className="WifiAcc" type="checkbox"  id="TypeTwo"  onChange={this.onChangeWifi}></input></label>
                <label className="Label1">Breakfast
                <input className="Breakf" type="checkbox"  id="TypeThree"  onChange={this.onChangeBreakfast}></input></label>
                <label className="Label2">Sort by: Price</label>
                <label className="Label3" >Lowest to heighest
                <input type="radio" className="RadioBox" id="Type4" onClick={this.onChangePriceRatinglow}></input></label>
                <label className="Label3">heighest to Lowest
                <input type="radio" className="RadioBox" id="Type5" onClick={this.onChangePriceRatinghigh}></input></label>
            </div>
            <div className="general-card"> 
                {this.state.filteredAccommodations.map(CreateCards)}
            </div>
            <h1 className="noPlaceFound" style={{display: this.state.noPlaceFound ? 'block' : 'none' }}> No place found</h1>
        </div>
    );
}
}


