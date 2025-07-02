// src/MapWithCountries.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const countries = [
  {
    name: 'France',
    position: [48.8566, 2.3522],
    description: 'Paris, France',
  },
  {
    name: 'Cameroun',
    position: [3.848, 11.5021],
    description: 'Yaoundé, Cameroun',
  },
  {
    name: 'Rwanda',
    position: [-1.9403, 29.8739],
    description: 'Kigali, Rwanda',
  },
];

const MapWithCountries = () => {
  return (
    <MapContainer
      center={[10, 10]}
      zoom={3}
      style={{ height: '200px', width: '80%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countries.map((country, index) => (
        <Marker key={index} position={country.position}>
          <Popup>{country.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithCountries;
