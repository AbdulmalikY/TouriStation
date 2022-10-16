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
                resturants: resp.data, 
                filteredRestraunts:resp.data
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
            <div className="general-card"> 
                {this.state.filteredRestraunts.map(CreateCards)}
            </div>
    );
}
}
