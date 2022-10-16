import React, { Component } from 'react';
import axios from 'axios';
import App from "../../App";
import Cards from "../../Card";

function CreateCards(touristic) {

//Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
    let ifFree;
    let ifFrindlyDisability;
    let ifTourGuide;

    if (touristic.Type1 == true){
        ifFree = "Free";
    }else{
        ifFree = "Not Free";
    }

    if (touristic.Type2 == true){
        ifFrindlyDisability = "Disability Friendly";
    }else{
        ifFrindlyDisability = "Disability Unfriendly";
    }

    if (touristic.Type3 == true){
        ifTourGuide = "Tour Guide available";
    }else{
        ifTourGuide = "Tour Guide unavailable";
    }
        
    return(
        <Cards
            key={touristic._id}
            theCardId={touristic._id}
            placeName={touristic.Name}
            stars={touristic.Rating}
            PRating={touristic.PRating}
            music= {ifFree}
            img={touristic.icon}
            status={Status(touristic.OpenTime, touristic.CloseTime)}
            descreption={touristic.Description}
            wifi={ifFrindlyDisability}
            partition={ifTourGuide}
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


export default class Touristic extends Component {
//constructor elemnts in login
    constructor(props){
        super(props);

//intialy no data enterd // the types are the filters for each place such as music wifi etc
    this.state = {
            touristic: [],
            TypeOne: false,
            TypeTwo: false,
            TypeThree: false,
            Type4: false,
            Type5: false,
            filteredTouristic:[],
            noPlaceFound: false
    }
    this.onChangeFree= this.onChangeFree.bind(this);
    this.onChangeDisiablity = this.onChangeDisiablity.bind(this);
    this.onChangeTourGuide = this.onChangeTourGuide.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
}
componentDidMount(){
    //Get touristic data, filteredTouristic used for filtring and sorting the cards
    axios.get('http://localhost:3000/places/sections/touristic')
        .then(resp => {
            console.log(resp)
            this.setState({
                touristic: resp.data, 
                filteredTouristic:resp.data
        })
        // console.log(this.state.touristic)
        // console.log(this.state.filteredTouristic)
    })
}

//========================================================//
// Filters
onChangeFree(e){
    this.setState({TypeOne: e.target.checked})
    // console.log(e.target.checked);
    // console.log(this.state.TypeOne);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredTouristic.filter(Type => {return Type.Type1 === e.target.checked})
        this.setState({ filteredTouristic: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeTwo === true ||this.state.TypeThree === true ){
            copy =this.state.filteredTouristic;
            this.setState({ filteredTouristic: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.touristic;
            this.setState({ filteredTouristic: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeDisiablity(e){
    this.setState({TypeTwo: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredTouristic.filter(Type => {return Type.Type2 === e.target.checked})
        this.setState({ filteredTouristic: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true ||this.state.TypeThree === true ){
            copy =this.state.filteredTouristic;
            this.setState({ filteredTouristic: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.touristic;
            this.setState({ filteredTouristic: copy })
            this.setState({noPlaceFound: false})
        }
    } 
}

onChangeTourGuide(e){
    this.setState({TypeThree: e.target.checked})
    // console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredTouristic.filter(Type => {return Type.Type3 === e.target.checked})
        this.setState({ filteredTouristic: copy })
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        if(this.state.TypeOne === true ||this.state.TypeTwo === true ){
            copy =this.state.filteredTouristic;
            this.setState({ filteredTouristic: copy })
            this.setState({noPlaceFound: false})
        }else{
            copy =this.state.touristic;
            this.setState({ filteredTouristic: copy })
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
        copy =  this.state.filteredTouristic.sort((a,b) => { return a.PRating.length - b.PRating.length})
        this.setState({ filteredTouristic: copy })
        document.getElementById('Type5').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.touristic;
        this.setState({ filteredTouristic: copy })
        this.setState({noPlaceFound: false})
    }
}

onChangePriceRatinghigh(e){
    this.setState({Type5: e.target.checked})
    console.log(e.target.checked);
    let copy;
    if(e.target.checked === true){
        copy =  this.state.filteredTouristic.sort((a,b) => { return b.PRating.length - a.PRating.length})
        this.setState({ filteredTouristic: copy })
        document.getElementById('Type4').checked = false;
        if(copy.length === 0){
            this.setState({noPlaceFound: true})
        }
    }else{
        copy =this.state.touristic;
        this.setState({ filteredTouristic: copy })
        this.setState({noPlaceFound: false})
    }
}
//========================================================//

render(){
    
    return(
        <div className="flexthem">
            <div className="Filters">
                <h4 className="FilterTitle">Filters</h4>
                <label className="Label1">Free
                <input className="FreeTour" type="checkbox"  id="TypeOne"  onChange={this.onChangeFree}></input></label>
                <label className="Label1">Disiability Friendly
                <input className="DisabilityTour" type="checkbox"  id="TypeTwo"  onChange={this.onChangeDisiablity}></input></label>
                <label className="Label1">Tour Guide
                <input className="TourGuideTour" type="checkbox"  id="TypeThree"  onChange={this.onChangeTourGuide}></input></label>
                <label className="Label2">Sort by: Price</label>
                <label className="Label3" >Lowest to heighest
                <input type="radio" className="RadioBox" id="Type4" onClick={this.onChangePriceRatinglow}></input></label>
                <label className="Label3">heighest to Lowest
                <input type="radio" className="RadioBox" id="Type5" onClick={this.onChangePriceRatinghigh}></input></label>
            </div>
            <div className="general-card"> 
                {this.state.filteredTouristic.map(CreateCards)}
            </div>
            <h1 className="noPlaceFound" style={{display: this.state.noPlaceFound ? 'block' : 'none' }}> No place found</h1>
        </div>
    );
}
}


