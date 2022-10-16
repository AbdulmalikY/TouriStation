import React, { Component } from 'react';
import axios from "axios";

export default class Filters extends Component{
    constructor(props){
        super(props);
    
        this.state = { 
            type: ""
        };
    
        this.sortBy = this.sortBy.bind(this);
    }
    sortBy(e){
        e.preventDefault();
        this.setState({type: event.target.value.substr(0,20)});
    }
    render(){
        
    }
}