import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
});

const countries = [
  {
    name: 'France',
    position: [46.603354, 1.888334],
  },
  {
    name: 'Cameroun',
    position: [7.369722, 12.354722],
  },
  {
    name: 'Rwanda',
    position: [-1.9403, 29.8739],
  },
];

const MapWithCountries = () => {
  return (
    <MapContainer
      center={[15, 10]}
      zoom={1}
      style={{ height: '250px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap France</a>'
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
      />

      {countries.map((country, index) => (
        <Marker key={index} position={country.position} icon={customIcon}>
          <Tooltip permanent direction="top" offset={[0, -20]}>
            <span>{country.name}</span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithCountries;
