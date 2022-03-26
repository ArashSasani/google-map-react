import React from 'react';
import GoogleMapReact from 'google-map-react';
import locationIcon from '../../images/mapmarker.svg';
import mapConfig from './map.config.json';

const GMapMarkers = ({
  locations,
  defaultCenter,
  center,
  zoom,
  style,
  mapDraggable = true,
}) => {
  const defaultProps = {
    center: defaultCenter,
    zoom: 11,
    draggable: mapDraggable,
  };

  return (
    <div style={style}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapConfig.googleMapKey }}
        center={center}
        zoom={zoom}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        draggable={defaultProps.draggable}
      >
        {locations.map((location, index) => {
          return (
            <div
              className="googlemaps-marker"
              key={`marker_${index}`}
              lat={location.lat}
              lng={location.lng}
            >
              <img src={locationIcon} alt={location.Name}></img>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default GMapMarkers;
