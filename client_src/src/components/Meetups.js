import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component{
  constructor(){
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount(){
    this.getMeetups();
  }

  getMeetups(){
    const token = "1OllC4f8lwTHZC9bwx2wwnfpNXuMuzDwOI4gR918mZgt0naE9Gw2qJuUOcDIZgX1";
    axios.get('http://localhost:3000/api/meetups?access_token=1OllC4f8lwTHZC9bwx2wwnfpNXuMuzDwOI4gR918mZgt0naE9Gw2qJuUOcDIZgX1')
      .then(response => {
        this.setState({meetups: response.data}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return(
        <MeetupItem key={meetup.id} item={meetup} />
      )
    })
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    )
  }
}

export default Meetups;