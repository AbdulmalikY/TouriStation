import React, { Component } from "react";
import axios from "axios";
import App from "../../App";
import Cards from "../../Card";

const CreateCards = (resturants) => {
  //Handel the Music, Wifi, Partition (to transfer it from bolean form into string)
  let ifMusic;
  let ifWifi;
  let ifPartition;

  //Type1 = Music, Type2 = Wifi, Type3= Partition

  if (resturants.Type1 == true) {
    ifMusic = "Music";
  } else {
    ifMusic = "No Music";
  }

  if (resturants.Type2 == true) {
    ifWifi = "Wifi";
  } else {
    ifWifi = "No Wifi";
  }

  if (resturants.Type3 == true) {
    ifPartition = "Partition";
  } else {
    ifPartition = "No Partition";
  }

  return (
    <Cards
      key={resturants._id}
      theCardId={resturants._id}
      placeName={resturants.Name}
      stars={resturants.Rating}
      PRating={resturants.PRating}
      music={ifMusic}
      img={resturants.icon} // need uploads file
      status={Status(resturants.OpenTime, resturants.CloseTime)}
      descreption={resturants.Description}
      wifi={ifWifi}
      partition={ifPartition}
    />
  );
};

// Check if the place is open or closed depending on the work hours
function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

export default class Resturants extends Component {
  //constructor elemnts in login
  constructor(props) {
    super(props);

    //intialy no data enterd // the types are the filters for each place such as music wifi etc
    this.state = {
      resturants: [],
      TypeOne: false, // handel the first type and checkbox on the page (ex Music)
      TypeTwo: false,
      TypeThree: false,
      Type4: false, // Handel the radiobox
      Type5: false,
      filteredRestraunts: [], // handel the filterd resturants cards in array
      noPlaceFound: false,
    };
    this.onChangeMusic = this.onChangeMusic.bind(this);
    this.onChangeWifi = this.onChangeWifi.bind(this);
    this.onChangePartition = this.onChangePartition.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }
  componentDidMount() {
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios
      .get("http://localhost:3000/places/sections/Resturant&Coffes")
      .then((resp) => {
        console.log(resp);
        this.setState({
          resturants: resp.data,
          filteredRestraunts: resp.data,
        });
        // console.log(this.state.resturants)
        // console.log(this.state.filteredRestraunts)
      });
  }

  //========================================================//
  // Filters
  onChangeMusic(e) {
    this.setState({ TypeOne: e.target.checked });
    // console.log(e.target.checked);
    // console.log(this.state.TypeOne);
    let copy;
    if (e.target.checked === true) {
      copy = this.state.filteredRestraunts.filter((Type) => {
        return Type.Type1 === e.target.checked;
      });
      this.setState({ filteredRestraunts: copy });
      if (copy.length === 0) {
        this.setState({ noPlaceFound: true });
      }
    } else {
      if (this.state.TypeTwo === true || this.state.TypeThree === true) {
        copy = this.state.filteredRestraunts;
        this.setState({ filteredRestraunts: copy });
        this.setState({ noPlaceFound: false });
      } else {
        copy = this.state.resturants;
        this.setState({ filteredRestraunts: copy });
        this.setState({ noPlaceFound: false });
      }
    }
  }

  onChangeWifi(e) {
    this.setState({ TypeTwo: e.target.checked });
    // console.log(e.target.checked);
    let copy;
    if (e.target.checked === true) {
      copy = this.state.filteredRestraunts.filter((Type) => {
        return Type.Type2 === e.target.checked;
      });
      this.setState({ filteredRestraunts: copy });
      if (copy.length === 0) {
        this.setState({ noPlaceFound: true });
      }
    } else {
      if (this.state.TypeOne === true || this.state.TypeThree === true) {
        copy = this.state.filteredRestraunts;
        this.setState({ filteredRestraunts: copy });
        this.setState({ noPlaceFound: false });
      } else {
        copy = this.state.resturants;
        this.setState({ filteredRestraunts: copy });
        this.setState({ noPlaceFound: false });
      }
    }
  }

  onChangePartition(e) {
    this.setState({ TypeThree: e.target.checked });
    // console.log(e.target.checked);
    let copy;
    if (e.target.checked === true) {
      copy = this.state.filteredRestraunts.filter((Type) => {
        return Type.Type3 === e.target.checked;
      });
      this.setState({ filteredRestraunts: copy });
      if (copy.length === 0) {
        this.setState({ noPlaceFound: true });
      }
    } else {
      if (this.state.TypeOne === true || this.state.TypeTwo === true) {
        copy = this.state.filteredRestraunts;
        this.setState({ filteredRestraunts: copy });
        this.setState({ noPlaceFound: false });
      } else {
        copy = this.state.resturants;
        this.setState({ filteredRestraunts: copy });
        this.setState({ noPlaceFound: false });
      }
    }
  }

  //========================================================//
  // Sort By
  onChangePriceRatinglow(e) {
    this.setState({ Type4: e.target.checked });
    let copy;
    if (e.target.checked === true) {
      copy = this.state.filteredRestraunts.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({ filteredRestraunts: copy });
      document.getElementById("Type5").checked = false;
      if (copy.length === 0) {
        this.setState({ noPlaceFound: true });
      }
    } else {
      copy = this.state.resturants;
      this.setState({ filteredRestraunts: copy });
      this.setState({ noPlaceFound: false });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({ Type5: e.target.checked });
    console.log(e.target.checked);
    let copy;
    if (e.target.checked === true) {
      copy = this.state.filteredRestraunts.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({ filteredRestraunts: copy });
      document.getElementById("Type4").checked = false;
      if (copy.length === 0) {
        this.setState({ noPlaceFound: true });
      }
    } else {
      copy = this.state.resturants;
      this.setState({ filteredRestraunts: copy });
      this.setState({ noPlaceFound: false });
    }
  }
  //========================================================//

  render() {
    return (
      <div className="flexthem">
        <div className="Filters">
          <h4 className="FilterTitle">Filters</h4>
          <label className="Label1">
            Music
            <input
              className="Checkbox1"
              type="checkbox"
              id="TypeOne"
              onChange={this.onChangeMusic}
            ></input>
          </label>
          <label className="Label1">
            Wifi
            <input
              className="Checkbox2"
              type="checkbox"
              id="TypeTwo"
              onChange={this.onChangeWifi}
            ></input>
          </label>
          <label className="Label1">
            Partiotion
            <input
              className="Checkbox3"
              type="checkbox"
              id="TypeThree"
              onChange={this.onChangePartition}
            ></input>
          </label>
          <label className="Label2">Sort by: Price</label>
          <label className="Label3">
            Lowest to heighest
            <input
              type="radio"
              className="RadioBox"
              id="Type4"
              onClick={this.onChangePriceRatinglow}
            ></input>
          </label>
          <label className="Label3">
            heighest to Lowest
            <input
              type="radio"
              className="RadioBox"
              id="Type5"
              onClick={this.onChangePriceRatinghigh}
            ></input>
          </label>
        </div>
        <div className="general-card">
          {this.state.filteredRestraunts.map(CreateCards)}
        </div>
        <h1
          className="noPlaceFound"
          style={{ display: this.state.noPlaceFound ? "block" : "none" }}
        >
          {" "}
          No place found
        </h1>
      </div>
    );
  }
}
