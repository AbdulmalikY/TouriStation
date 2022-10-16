import React, { Component } from 'react';
import App from "../App";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import GoogleButton from 'react-google-button'



function getcatogrynum (catogryvalue){
    switch(catogryvalue) {
        case "Resturant&Coffes":
            return 0;
            break;

        case "accommodations":
            return 1;
            break;

        case "malls":
            return 2;
            break;
    
        case "touristic":
            return 3;
            break;
        
        case "extraservices":
            return 4;
            break;

            default: return 0
             
    }
}

function getcatogryid(catogryvalue){
    switch(catogryvalue) {
        case "Resturant&Coffes":
            return "60357f6f86a442bc20120b55";
            break;

        case "accommodations":
            return "60a56eba21552d6f886a2e97";
            break;

        case "malls":
            return "60a56efe21552d6f886a2e98";
            break;
    
        case "touristic":
            return "60a56f3821552d6f886a2e99";
            break;
        
        case "extraservices":
            return "60a56f6a21552d6f886a2e9a";
            break;

            default: return 0
             
    }
}

export default class CreatePlace extends Component {

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
        this.onChangeOpenTime = this.onChangeOpenTime.bind(this);
        this.onChangeCloseTime = this.onChangeCloseTime.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeZib = this.onChangeZib.bind(this);
        this.onChangeGoogle = this.onChangeGoogle.bind(this);
        this.onChangeType1 = this.onChangeType1.bind(this);
        this.onChangeType2 = this.onChangeType2.bind(this);
        this.onChangeType3 = this.onChangeType3.bind(this);
        this.onChangeCatogry = this.onChangeCatogry.bind(this);
        this.onChangePRating = this.onChangePRating.bind(this);
        this.fileuploadPhotos = this.fileuploadPhotos.bind(this);


 
        this.fileupload = this.fileupload.bind(this);
        // this.this.routechange = this.this.routechange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


//intialy no data enterd
        this.state = {
            Name: '',
            Description: '',
            Phone: '',
            icon: null,
            PlacePhotos: [null],
            Website: '',
            Twitter: '',
            Instgram: '',
            OpenTime: '', // Number 0-23 should not be bigger closeTime
            CloseTime: '', // Number 0-23 should not be smaller closeTime
            City: '',
            Street: '',
            Zib: '',
            Google: '',
            PRating: '$',
            catogries: [],
            catogry:'',
            Types: [], //Store all types in aray to refer to it when catogeiry change
            Type1: '', //The value is set by the catogry type it will change as the user change catogry
            Type2: '', //The value is set by the catogry type it will change as the user change catogry
            Type3: '', //The value is set by the catogry type it will change as the user change catogry
            Type1v: false,
            Type2v: false,
            Type3v: false,
            Owner: false,
            Admin: false,
            holderid: ''
        }
    }


    // checkloginstatus() {
    //     axios.get("http://localhost:3000/IsLoged", {withCredentials: true})
    //     .then(res => {
    //         if(res.data === true){
    //             // window.location = '/';
    //         }
    //     })
    // }

    chickowner(){
        return axios.get("http://localhost:3000/isOwnerregister", {withCredentials: true})
        .then(res => {
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
        


        axios.get('http://localhost:3000/categories')
        .then(res => {
            console.log(res)
                this.setState({
                    catogries: res.data.Catogries.map(cato => cato[0]),
                    catogry: res.data.Catogries[0][0],
                    Types: res.data.Catogries,
                    Type1: res.data.Catogries[0][1].TName,
                    Type2: res.data.Catogries[0][2].TName,
                    Type3: res.data.Catogries[0][3].TName,
                })
        })
        .then(() => console.log(this.state.Instgram))
    }
    //For First Name input change 
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

    onChangeOpenTime(e) {
        this.setState({
                OpenTime: e.target.value
            });
        }
    
         //For Last Email input change 
     onChangeCloseTime(e) {
        this.setState({
              CloseTime: e.target.value
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

        this.setState({
              Google: e.target.value
         });
    }

    onChangeCatogry(e){
       const typenum = getcatogrynum(e.target.value)

        this.setState({
            catogry: e.target.value,
            Type1: this.state.Types[typenum][1].TName,
            Type2: this.state.Types[typenum][2].TName,
        })
        if (typenum != 4) {
            this.setState({Type3: this.state.Types[typenum][3].TName})
        }

    }
    onChangePRating(e){
        this.setState({
            PRating: e.target.value
        })
    }
    onChangeType1(e){
        this.setState({
            Type1v: e.target.checked
        })
    }
    onChangeType2(e){
        this.setState({
            Type2v: e.target.checked
        })
    }
    onChangeType3(e){
        console.log(this.state.Description);
        this.setState({
            Type3v: e.target.checked
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
        PlacePhotos: e.target.files,
        })

    }
    


    //for submit 
    async onSubmit(e) {
        //It will prevnt default html submition 
        e.preventDefault();



        // iconss.push(this.state.PlacePhotos)
        if(this.state.Google == ''){
            this.setState({Google: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330733.4349089228!2d46.131339660269504!3d24.84523713267119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2011564!5e0!3m2!1sen!2ssa!4v1622847621291!5m2!1sen!2ssa"})
        }


const catogieryId = getcatogryid(this.state.catogry)
        // console.log(iconss);

     const formData = new FormData();
     formData.append('icon', this.state.icon);

     if(this.state.PlacePhotos.length != 0){
        for (let i = 0; i < this.state.PlacePhotos.length; i++) {
            formData.append('icon', this.state.PlacePhotos[i]);            
        }
}
        formData.append('Name', this.state.Name);
        formData.append('Description', this.state.Description);
        formData.append('Website', this.state.Website);
        formData.append('Phone', this.state.Phone);
        formData.append('Twitter', this.state.Twitter);
        formData.append('Instgram', this.state.Instgram);
        formData.append('OpenTime', this.state.OpenTime);
        formData.append('CloseTime', this.state.CloseTime);
        formData.append('City', this.state.City);
        formData.append('Street', this.state.Street);
        formData.append('ZibCode', this.state.Zib);
        formData.append('GoogleMap', this.state.Google);
        formData.append('PRating', this.state.PRating);
        formData.append('Catogry', catogieryId);
        formData.append('Type1', this.state.Type1v);
        formData.append('Type2', this.state.Type2v);
        formData.append('Type3', this.state.Type3v);

 

        if(this.state.Owner){
            formData.append('Owner', this.state.holderid);
        }

        if(this.state.Admin){
            formData.append('Admin', this.state.holderid);
        }

console.log(this.state.openTime);
console.log(this.state.CloseTime);

         console.log(formData);
        //User
         //catogry

    await axios.post('http://localhost:3000/places/add', formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "type": "formData"
         },
         withCredentials: true,
    })
    .then(res => {
        alert("Place is saved")
        window.location = `/place/${this.state.Name}`;
        //  window.location = '/';
    })
    .catch(err => 
    {
        alert(err.response.data.message)
    })
    }


    render(){
        return(
    <div>
        <h3>Create New Place</h3>
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
          <div className="form-groub col-md-4"> 
            <label>Your Price Rating: </label>
            <select className="form-control" style={{height: "38px"}}  value={this.state.PRating} onChange={this.onChangePRating} aria-label="Default select example">
            
                    <option> $ </option> <option> $$ </option> <option> $$$ </option>


            
        </select>
          </div>
          <div className="form-group col-md-4"> 
            <label>Open Time: </label>
            <input  type="number" min='0' max='23'
              className="form-control"
              value={this.state.OpenTime}
             onChange={this.onChangeOpenTime}
            />


          </div>
          <div className="form-group col-md-4"> 
            <label>Close Time: </label>
            <input type="number" min='0' max='23'
                
                className="form-control"
                value={this.state.CloseTime}
                onChange={this.onChangeCloseTime}
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
        <div style={{marginTop: "10px"}}>
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
        </div>


        {/* Place Types */}
        <div style={{marginTop: '20px', marginBottom: '5px'}} > 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Type1v}
            onChange={this.onChangeType1}/>
        <label>Your {this.state.catogry} includes {this.state.Type1}</label>
        </div>
        
        <div style={{marginTop: '20px', marginBottom: '5px'}}> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Type2v}
            onChange={this.onChangeType2}/>
        <label>Your {this.state.catogry} includes {this.state.Type2}</label>
        </div>
        
        <div style={{display: this.state.catogry == "extraservices"  ? "none" :  "block", marginTop: '20px', marginBottom: '5px'}}> 
        <input type="checkbox" 
        style={{marginRight: '10px'}}
            checked={this.state.Type3v}
            onChange={this.onChangeType3}/>
        <label>Your {this.state.catogry} includes {this.state.Type3}</label>
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
          <label className="custom-file-label">Place Photos: </label>
          <input  type="file" multiple
              className="custom-file-input"
              onChange={this.fileuploadPhotos}
              />
        </div>




          <div className="form-group">
            <input type="submit" value= { "Create New " + this.state.catogry} className="btn btn-primary" />
          </div>

        </form>
     
      </div>
        )
    }
}
