import React from 'react';
import GoogleMapReact from 'google-map-react';
import locationIcon from '../../images/mapmarker.svg';
import mapConfig from './map.config.json';

import './css/GMapOverlayMarker.css';

const GMapOverlayMarker = ({
  center,
  zoom = 14,
  style,
  onMarkerLocationSelect,
}) => {
  const loadMap = (map, maps) => {
    //init map
    onMarkerLocationSelect({
      Lat: map.getCenter().lat(),
      Lng: map.getCenter().lng(),
    });
    maps.event.addListener(map, 'dragend', () => {
      onMarkerLocationSelect({
        Lat: map.getCenter().lat(),
        Lng: map.getCenter().lng(),
      });
    });
  };
  return (
    <div className="map-marker-container" style={style}>
      <img src={locationIcon} className="overlay-marker" />
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapConfig.googleMapKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        draggable={true}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
    </div>
  );
};

export default GMapOverlayMarker;
