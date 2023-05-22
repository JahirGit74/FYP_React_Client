import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
import React from 'react'
import { useEffect } from 'react';

import { Goole_Map_Api_Key } from '../../config';

import styles from "./Landanalysis.module.css"

class MainMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        markers: [
          {
            title: "The marker`s title will appear as a tooltip.",
            position: { 
                
                    lat: props.latitude,
                    lng: props.longitude
             }
          }
        ]
      };
      this.onClick = this.onClick.bind(this);
    }
    
  
    onClick(t, map, coord) {
      const { latLng } = coord;
      const lat = latLng.lat();
      const lng = latLng.lng();
      this.props.setLatitude(lat);
      this.props.setLongitude(lng);
      this.setState(previousState => {
        return {
          markers: [
            {
              title: "",
              name: "",
              position: { lat, lng }
            }
          ]
        };
      });
    }
  
    

    render() {
      return (
        <div>
          <Map
            google={this.props.google}
            style={{ width: "100%", height:"50%", marginTop: "3rem" }}
            className={"map"}
            zoom={10}
            onClick={this.onClick}
          >
            {this.state.markers.map((marker, index) => (
              <Marker
                key={index}
                title={marker.title}
                name={marker.name}
                position={marker.position}
              />
            ))}
          </Map>
        </div>
      );
    }
  }
  
  export const MapContainer = GoogleApiWrapper({
    apiKey: (Goole_Map_Api_Key)
  })(MainMap);