import React, { Component } from 'react';
import axios from 'axios';
import App from "../../App";
import Cards from "../../EventCards";

function CreateEventCards(extraservices) {

//Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)

    return(
        <Cards
            key={extraservices._id}
            theCardId={extraservices._id}
            placeName={extraservices.Name}
            stars={extraservices.Rating}
            PRating={extraservices.PRating}
            img={extraservices.icon}
            status={Status(extraservices.OpenTime, extraservices.CloseTime)}
            descreption={extraservices.Description}
            wifi={ExtraType(extraservices.Type1 , extraservices.Type2)}
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

//Handel the Gym, Rental car center (to transfer it from bolean form into string)   
function ExtraType (EGym, ECar){
    if(EGym == true){
        return "Gym";
    }else{
        if(ECar == true){
            return "Rental Car Center";
    }
}}

export default class ExtraServcis extends Component {
//constructor elemnts in login
    constructor(props){
        super(props);

//intialy no data enterd // the types are the filters for each place such as music wifi etc
    this.state = {
            extraservices: [],
            TypeOne: false,
            TypeTwo: false,
            TypeThree: false,
            Type4: false,
            Type5: false,
            filteredExtraservices:[],
            noPlaceFound: false
    }
    this.onChangeGym= this.onChangeGym.bind(this);
    this.onChangeRentalCar = this.onChangeRentalCar.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
}
componentDidMount(){
    //Get extraservices data, filteredExtraservices used for filtring and sorting the cards
    axios.get('http://localhost:3000/places/sections/extraservices')
        .then(resp => {
            console.log(resp)
            this.setState({
                extraservices: resp.data, 
                filteredExtraservices:resp.data
        })
        // console.log(this.state.touristic)
        // console.log(this.state.filteredTouristic)
    })
}

//========================================================//
// Filters
onChangeGym(e){
    this.setState({TypeOne: e.target.checked})
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredExtraservices.filter(Type => {return Type.Type1 === e.target.checked})
        this.setState({ filteredExtraservices: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeTwo === true){
            copy =this.state.filteredExtraservices;
            this.setState({ filteredExtraservices: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.extraservices;
            this.setState({ filteredExtraservices: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeRentalCar(e){
    this.setState({TypeTwo: e.target.checked})
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredExtraservices.filter(Type => {return Type.Type2 === e.target.checked})
        this.setState({ filteredExtraservices: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true){
            copy =this.state.filteredExtraservices;
            this.setState({ filteredExtraservices: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.extraservices;
            this.setState({ filteredExtraservices: copy })
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
        copy =  this.state.filteredExtraservices.sort((a,b) => { return a.PRating.length - b.PRating.length})
        this.setState({ filteredExtraservices: copy })
        document.getElementById('Type5').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.extraservices;
        this.setState({ filteredExtraservices: copy })
        this.setState({noPlaceFound: false})
    }
}

onChangePriceRatinghigh(e){
    this.setState({Type5: e.target.checked})
    console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredExtraservices.sort((a,b) => { return b.PRating.length - a.PRating.length})
        this.setState({ filteredExtraservices: copy })
        document.getElementById('Type4').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.extraservices;
        this.setState({ filteredExtraservices: copy })
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
                <input className="GymExtra" type="checkbox"  id="TypeOne"  onChange={this.onChangeGym}></input></label>
                <label className="Label1">Rental Car Center
                <input className="CarRentalExtra" type="checkbox"  id="TypeTwo"  onChange={this.onChangeRentalCar}></input></label>
                <label className="Label2">Sort by: Price</label>
                <label className="Label3" >Lowest to heighest
                <input type="radio" className="RadioBox" id="Type4" onClick={this.onChangePriceRatinglow}></input></label>
                <label className="Label3">heighest to Lowest
                <input type="radio" className="RadioBox" id="Type5" onClick={this.onChangePriceRatinghigh}></input></label>
            </div>
            <div className="general-card"> 
                {this.state.filteredExtraservices.map(CreateEventCards)}
            </div>
            <h1 className="noPlaceFound" style={{display: this.state.noPlaceFound ? 'block' : 'none' }}> No place found</h1>
        </div>
    );
}
}


