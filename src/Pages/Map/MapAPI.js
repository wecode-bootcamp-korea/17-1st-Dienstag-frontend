import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom';
import './MapAPI.scss';

class MapAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        {
          lat: 47.49855629475769,
          lng: -122.14184416996333,
          location: 'store1',
        },
        { lat: 47.359423, lng: -122.021071, location: 'store2' },
        { lat: 47.2052192687988, lng: -121.988426208496, location: 'store3' },
        { lat: 47.6307081, lng: -122.1434325, location: 'store4' },
        { lat: 47.3084488, lng: -122.2140121, location: 'store5' },
        { lat: 47.5524695, lng: -122.0425407, location: 'store6' },
      ],
    };
  }
  handleInfo = () => {
    console.log('hello world');
  };
  displayMarkers = () => {
    const img =
      'https://www.freitag.ch/profiles/freitag_neo/themes/neocortex/images/f-square-152x152.png';

    return this.state.stores.map((store, index) => {
      return (
        <Marker
          icon={{
            url: img,
            size: { width: 50, height: 50 },
            anchor: { x: 15, y: 50 },
            scaledSize: { width: 50, height: 50 },
          }}
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng,
          }}
          onClick={() => console.log('You Clicked Me!')}
        >
          <InfoWindow>
            <div style={{ color: 'black' }}>클릭시 빰!</div>
            {/* 아직 구현할 예정  */}
          </InfoWindow>
        </Marker>
      );
    });
  };
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    const backstyle = [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#000000',
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#ffffff',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#fffff',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#fffff',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 80,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 80,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 80,
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
        ],
      },
    ];

    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        styles={backstyle}
        onClick={this.handleInfo}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDZ5_HuTJz3YdXQcbZBy-R0eKuNWWe2UoU',
})(MapAPI);
