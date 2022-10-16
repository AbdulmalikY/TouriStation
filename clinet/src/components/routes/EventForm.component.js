import React, { Component } from 'react';
import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import GoogleButton from 'react-google-button'

import { Fa500Px } from "react-icons/fa";







export default class CreateEvent extends Component {

    //constructor elemnts in login
    constructor(props){
        super(props);


        // To ensure This refers to this class
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeInstagram = this.onChangeInstagram.bind(this);
        this.onChangeTwitter = this.onChangeTwitter.bind(this);
        this.onChangeSTime = this.onChangeSTime.bind(this);
        this.onChangeETime = this.onChangeETime.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeZib = this.onChangeZib.bind(this);
        this.onChangeGoogle = this.onChangeGoogle.bind(this);
        this.onChangeMusic = this.onChangeMusic.bind(this);
        this.onChangeArt = this.onChangeArt.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeProvided = this.onChangeProvided.bind(this);
        this.onChangeGames = this.onChangeGames.bind(this);
        this.onChangePRating = this.onChangePRating.bind(this);
        this.fileuploadPhotos = this.fileuploadPhotos.bind(this); 
        this.fileupload = this.fileupload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


//intialy no data enterd
        this.state = {
            Name: '',
            Description: '',
            Phone: '',
            icon: null,
            EventPhotos: [],
            Website: '',
            Twitter: '',
            Instgram: '',
            STime: '', // Number 0-23 should not be bigger closeTime
            ETime: '', // Number 0-23 should not be smaller closeTime
            City: '',
            Street: '',
            Zib: '',
            Google: '',
            Provided: '',
            PRating: '$',
            Music: false,
            Games: false,
            Art: false,
            Food: false,
            Owner: false,
            Admin: false,
            holderid: '',
        }
    }



    chickowner(){
        return axios.get("http://localhost:3000/isOwnerregister", {withCredentials: true})
        .then(res => {
            console.log("Owner -->" + res.data);
            if(res.data != false){
                this.setState({
                    Owner: true,
                    holderid: res.data
                })
            }
        })
    }

    chickadmin(){
        axios.get("http://localhost:3000/isAdminregister", {withCredentials: true})
        .then(res => {
            console.log("Admin -->" + res.data);
            if(res.data != false){
                this.setState({
                    Admin: true,
                    holderid: res.data
                })
            }else{
                if(this.state.Owner == false){
                    window.location = '/';
                }
            }
        })
    }

    componentDidMount(){
        // this.checkloginstatus();
        this.chickowner()
        .then(() => this.chickadmin())
    }
    //For Name input change 
    onChangeName(e) {
    this.setState({
            Name: e.target.value
        });
    }
    
     //For Last Email input change 
     onChangeDescription(e) {
        this.setState({
             Description: e.target.value
        });
    }

    //For Email input change 
    onChangePhone(e) {
        this.setState({
             Phone: e.target.value
         });
    }
    onChangeWebsite(e) {
        this.setState({
                Website: e.target.value
            });
    }
    
    //For Last Email input change 
     onChangeInstagram(e) {
         console.log(this.state.catogry);
        this.setState({
             Instgram: e.target.value
        });
    }
    
        //For Email input change 
    onChangeTwitter(e) {
        this.setState({
             Twitter: e.target.value
         });
    }

    onChangeProvided(e) {
        this.setState({
             Provided: e.target.value
         });
    }

    onChangeSTime(e) {
        this.setState({
                STime: e.target.value
            });
        }
    
         //For Last Email input change 
     onChangeETime(e) {
        this.setState({
              ETime: e.target.value
         });
    }
    

    onChangeCity(e) {
        this.setState({
              City: e.target.value
         });
    }


    onChangeZib(e) {
        this.setState({
              Zib: e.target.value
         });
    }


    onChangeStreet(e) {
        this.setState({
              Street: e.target.value
         });
    }

    onChangeGoogle(e) {
        console.log(this.state.PRating);
        console.log(this.state.PlacePhotos);
        this.setState({
              Google: e.target.value
         });
    }

    onChangePRating(e){
        this.setState({
            PRating: e.target.value
        })
    }

    onChangeMusic(e){
        this.setState({
            Music: e.target.checked
        })
    }
    onChangeArt(e){
        this.setState({
            Art: e.target.checked
        })
    }
    onChangeGames(e){
        this.setState({
            Games: e.target.checked
        })
    }

    onChangeFood(e){
        this.setState({
            Food: e.target.checked
        })
    }
    // File change Handler input change 
    fileupload(e) {
        this.setState({
        icon: e.target.files[0],
        })
    }
    

    fileuploadPhotos(e) {
        this.setState({
            EventPhotos: e.target.files,
        })

    }
    


    //for submit 
    async onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();


        const iconss =[this.state.icon]

        // iconss.push(this.state.PlacePhotos)
    
        if(this.state.Google == ''){
            this.setState({Google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330733.4349089228!2d46.131339660269504!3d24.84523713267119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2011564!5e0!3m2!1sen!2ssa!4v1622847621291!5m2!1sen!2ssa"})
        }


        console.log(iconss);

     const formData = new FormData();
     formData.append('icon', this.state.icon);

     if(this.state.EventPhotos.length != 0){
        for (let i = 0; i < this.state.EventPhotos.length; i++) {
            formData.append('icon', this.state.EventPhotos[i]);            
        }
}
        formData.append('Name', this.state.Name);
        formData.append('Description', this.state.Description);
        formData.append('Website', this.state.Website);
        formData.append('Phone', this.state.Phone);
        formData.append('Twitter', this.state.Twitter);
        formData.append('Instgram', this.state.Instgram);
        formData.append('STime', this.state.STime);
        formData.append('ETime', this.state.ETime);
        formData.append('City', this.state.City);
        formData.append('Street', this.state.Street);
        formData.append('ZibCode', this.state.Zib);
        formData.append('GoogleMap', this.state.Google);
        formData.append('PRating', this.state.PRating);
        formData.append('Games', this.state.Games);
        formData.append('Art', this.state.Art);
        formData.append('Food', this.state.Food);
        formData.append('Music', this.state.Music);
        formData.append('ProvidedBy', this.state.Provided);


        if(this.state.Owner){
            formData.append('Owner', this.state.holderid);
        }

        if(this.state.Admin){
            formData.append('Admin', this.state.holderid);
        }



         console.log(formData);
        //User
         //catogry

    await axios.post('http://localhost:3000/Events/add', formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "type": "formData"
         },
         withCredentials: true,
    })
    .then(res => {
        alert("Event is saved")
         window.location = `/event/${this.state.Name}`;
    })
    .catch(err => 
    {
        alert(err.response.data.message)
    })
    }


    render(){
        return(
    <div>
        <h3>Create New Event</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group col-md-6"> 
            <label>Phone: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Phone}
                onChange={this.onChangePhone}
                />
          </div>
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Description}
                onChange={this.onChangeDescription}
                />
          </div>
                <div className="form-row">
          <div className="form-group col-md-4"> 
            <label>Website: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.Website}
                onChange={this.onChangeWebsite}
                />
          </div>
          <div className="form-group col-md-4"> 
            <label>Instgram: </label>
            <input  type="text" 
              className="form-control"
              value={this.state.Instgram}
             onChange={this.onChangeInstagram}
            />

          </div>
          <div className="form-group col-md-4"> 
            <label>Twitter: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.Twitter}
                onChange={this.onChangeTwitter}
                />
          </div>
          </div>



          <div className="form-row">
          <div className="form-group col-md-3"> 
            <label>Provided By: </label>
            <input  type="text"
                
                className="form-control"
                value={this.state.Provided}
                onChange={this.onChangeProvided}
                />
          </div>

          <div className="form-groub col-md-3"> 
            <label>Your Price Rating: </label>
            <select className="form-control" style={{height: "38px"}}  value={this.state.PRating} onChange={this.onChangePRating} aria-label="Default select example">
            
                    <option> $ </option> <option> $$ </option> <option> $$$ </option>


            
        </select>
          </div>
          <div className="form-group col-md-3"> 
            <label>Start Date: </label>
            <input  type="Date" 
              className="form-control"
              value={this.state.STime}
             onChange={this.onChangeSTime}
            />


          </div>
          <div className="form-group col-md-3"> 
            <label>End Date: </label>
            <input type="Date"

                className="form-control"
                value={this.state.ETime}
                onChange={this.onChangeETime}
                />
          </div>
          </div>


          {/* Place location */}
          <div className="form-row">

          <div className="form-group col-md-3"> 
            <label>City: </label>
            <input  type="text"
              className="form-control"
              value={this.state.City}
             onChange={this.onChangeCity}
            />
            
          </div>
          <div className="form-group col-md-3"> 
            <label>Street: </label>
            <input type="text" 
                className="form-control"
                value={this.state.Street}
                onChange={this.onChangeStreet}
                />
          </div>

          <div className="form-group col-md-3"> 
            <label>Zib Code: </label>
            <input type="Number" 
                className="form-control"
                value={this.state.Zib}
                onChange={this.onChangeZib}
                />
          </div>

          <div className="form-group col-md-3"> 
            <label>Google Map Link: </label>
            <input type="text" 
                className="form-control"
                value={this.state.Google}
                onChange={this.onChangeGoogle}
                />
          </div>
          </div>

        {/* Place Catogry */}
        {/* <div style={{marginTop: "10px"}}>
            <label style={{marginRight: "10px"}}>Your Place is Under What Catogiery?</label>
        <select className="form-select col-md-8" style={{margin: "10px 0", height: "38px"}}  value={this.state.catogry} onChange={this.onChangeCatogry} aria-label="Default select example">
            {
                this.state.catogries.map((user) => {
                    return<option
                    key={user}
                    value={user}>{user}</option>
                })
            }
        </select>
        </div> */}


        {/* Place Types */}
        <div style={{marginTop: '20px', marginBottom: '5px'}} > 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Music}
            onChange={this.onChangeMusic}/>
        <label>Includes Music</label>
        </div>
        
        <div style={{marginTop: '20px', marginBottom: '5px'}}> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Art}
            onChange={this.onChangeArt}/>
        <label>Includes Food</label>
        </div>

        <div style={{marginTop: '20px', marginBottom: '5px'}}> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Food}
            onChange={this.onChangeFood}/>
        <label>Includes Food</label>
        </div>
        
        <div style={{marginTop: '20px', marginBottom: '5px'}}> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Games}
            onChange={this.onChangeGames}/>
        <label>Includes Games: </label>
        </div>




{/* Icons and images */}

        <div className="custom-file"> 
          <label className="custom-file-label">Place Icon:  {this.state.icon == null  ? " " :  this.state.icon.name}</label>
          <input  type="file"
              className="custom-file-input"
              onChange={this.fileupload}
              />
        </div>
        
        <div className="custom-file"> 
          <label className="custom-file-label">Event Photos: </label>
          <input  type="file" multiple
              className="custom-file-input"
              onChange={this.fileuploadPhotos}
              />
        </div>




          <div className="form-group">
            <input type="submit" value= "Create New Event" className="btn btn-primary" />
          </div>

        </form>
     
      </div>
        )
    }
}
