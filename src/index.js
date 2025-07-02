import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming App.js is in the same directory
import 'leaflet/dist/leaflet.css'; //importer les styles Leaflet pour le carte dynamique
<<<<<<< HEAD
=======


>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);


