import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import GoogleButton from 'react-google-button'
import "bootstrap/dist/css/bootstrap.min.css";
import {Alert} from 'react-bootstrap'
import '../Styles/styles.css' 
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

//Import reuired Routers
import TouriNavbar from "./routes/navbar.component"
import LoginUsers from "./routes/Login-User.component";
import RegisterUsers from "./routes/Register-User.component";
import LoginAdmins from "./routes/Login-Admin.component";
import RegisterAdmins from "./routes/Register-Admin.component";
import Resturants from "./routes/Sections/Resturants.component";
import Accommodations from "./routes/Sections/Accommodations.component";
import Malls from "./routes/Sections/Malls.component";
import Touristic from "./routes/Sections/Touristic .component";
import Events from "./routes/Sections/Events.component";
import ExtraServcis from "./routes/Sections/ExtraServcis.component";
import Home from "./routes/Home.component";
import Search from "./routes/Search.component";
import Profile from "./routes/Profile.component";
import Requests from "./routes/Requests.component";
import PlaceForm from "./routes/PlaceForm.component";
import NewEvent from "./routes/EventForm.component";
import Place from "./routes/Place.component.js";
import Event from "./routes/Event.component.js";
import Reset from "./routes/Reset.component.js";
import resetUPassword from "./routes/resetUPassword.component.js";



function App() {
  return (
    <Router>
    <TouriNavbar />
    <Route path="/" exact component={Home} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/Search/:place" exact component={Search} />

      <div className = "container" >
        <Route path="/login" exact component={LoginUsers} />
        <Route path="/Reset" exact component={Reset} />
        <Route path="/resetUPassword/:validstring/:Email" exact component={resetUPassword} />
        <Route path="/register" exact component={RegisterUsers} />
        <Route path="/Admin/LoginControl" exact component={LoginAdmins} />
        <Route path="/Admin/RegisterControl" exact component={RegisterAdmins} />
        <Route path="/Admin/Requests" exact component={Requests} />
        <Route path="/NewPlace" exact component={PlaceForm} />
        <Route path="/NewEvent" exact component={NewEvent} />
     <Route path="/resturants" exact component={Resturants} />
     <Route path="/Place/:place" exact component={Place} />
     <Route path="/Event/:event" exact component={Event} />
    <Route path="/accommodations" exact component={Accommodations} />
    <Route path="/malls" exact component={Malls} />
    <Route path="/touristic" exact component={Touristic} />
    <Route path="/extraservices" exact component={ExtraServcis} />
    <Route path="/events" exact component={Events} />

    

      </div>
    </Router>
  );
} 
export default App;