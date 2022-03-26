import React from 'react';
import GoogleMapReact from 'google-map-react';
import locationIcon from '../../images/mapmarker.svg';
import mapConfig from './map.config.json';

const GMapSummary = ({
  location,
  defaultCenter,
  center,
  zoom,
  style,
  disableZoom = false,
  disableFullScreen = false,
  mapDraggable = true,
}) => {
  const defaultProps = {
    center: defaultCenter,
    zoom: 11,
    draggable: mapDraggable,
  };

  const loadMap = (map, _) => {
    let options = {};
    if (disableZoom) {
      options = {
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
      };
    }
    if (disableFullScreen) {
      options.fullscreenControl = false;
    }
    options && map.setOptions(options);
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
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      >
        <div
          className="googlemaps-marker"
          lat={location.lat}
          lng={location.lng}
        >
          <img src={locationIcon} alt={location.Name}></img>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default GMapSummary;
