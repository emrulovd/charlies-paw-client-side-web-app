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
            locations : {              // Hard coding the locations of the city in terms of lattitude and longtitude
                Coventry:{
                    lat: 52.4068,
                    lon: 1.5197
                },
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


    render() {
        return(
            <div className={classes.Container}>
                    <Map className={classes.Map}
                        google={this.props.google}
                        zoom={15}
                        initialCenter={
                        {
                            lat: 42.1354,
                            lng: 24.7453
                        }
                        }
                    >
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
            </div>
        )
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: props.apiKey
}))(DetailMap);