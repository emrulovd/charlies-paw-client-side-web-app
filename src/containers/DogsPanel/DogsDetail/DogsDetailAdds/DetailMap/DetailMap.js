import React, {Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

import classes from './DetailMap.module.css'

class DetailMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
            location : {              // Hard coding the locations of the city in terms of lattitude and longtitude
                Coventry:{
                    city:'Coventry',
                    lat: 52.406800,
                    lon: -1.519700
                },
                London: {
                    city:'London',
                    lat: 51.5074,
                    lon: 0.1278
                },
                Liverpool:{
                    city:'Liverpool',
                    lat: 53.4084,
                    lon: -2.9916
                },
                York:{
                    city:'York',
                    lat: 53.9600,
                    lon: -1.0873
                }
            }
          };
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  mapGenerator = () => {
      console.log(this.props.dog.location)
      for(let index in this.state.location){
          if(this.state.location[index].city === this.props.dog.location){
                return(
                    <Map className={classes.Map}
                    google={this.props.google}
                    zoom={15}
                    initialCenter={
                    {
                        lat: this.state.location[index].lat,
                        lng: this.state.location[index].lon
                    }
                    }>
                    <Marker
                    onClick={this.onMarkerClick}
                    name={"Charlie's Paw Sheltter"}
                    />
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    </InfoWindow>
                </Map>
            )
          }
      }
  }

    render() {
        return(
            <div className={classes.Container}>
                    {this.mapGenerator()}
            </div>
        )
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyBmjA2bQNvU-v4tvW0N56Jw_C9gK8qRT-0',
}))(DetailMap);