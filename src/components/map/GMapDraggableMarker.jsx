import React from 'react';
import GoogleMapReact from 'google-map-react';
import locationIcon from '../../images/mapmarker.svg';
import mapConfig from './map.config.json';

const GMapDraggableMarker = ({
  lat,
  lng,
  center,
  zoom = 14,
  style,
  mapDraggable = true,
  markersDraggable = true,
  onMarkerLocationSelect,
}) => {
  const loadMap = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: lat, lng: lng },
      map,
      icon: locationIcon,
      draggable: markersDraggable,
    });
    maps.event.addListener(map, 'dragend', e => {
      marker.setPosition(map.getCenter());
      onMarkerLocationSelect({
        Lat: marker.getPosition().lat(),
        Lng: marker.getPosition().lng(),
      });
    });
    marker.addListener('dragend', e => {
      onMarkerLocationSelect({ Lat: e.latLng.lat(), Lng: e.latLng.lng() });
    });
  };
  return (
    <div style={style}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapConfig.googleMapKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        draggable={mapDraggable}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
    </div>
  );
};

export default GMapDraggableMarker;
