"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with Next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const locations = [
  {
    name: "Restup Driscoll House (Unterkunft)",
    lat: 51.4947,
    lng: -0.0989,
    type: "hostel",
  },
  {
    name: "Elephant & Castle Station",
    lat: 51.4943,
    lng: -0.1001,
    type: "tube",
  },
  { name: "London Eye", lat: 51.5033, lng: -0.1195, type: "sight" },
  { name: "Tower Bridge", lat: 51.5055, lng: -0.0754, type: "sight" },
  { name: "Buckingham Palace", lat: 51.5014, lng: -0.1419, type: "sight" },
  { name: "Camden Market", lat: 51.5413, lng: -0.1428, type: "sight" },
  { name: "British Museum", lat: 51.5194, lng: -0.127, type: "sight" },
  { name: "Natural History Museum", lat: 51.4967, lng: -0.1764, type: "sight" },
  { name: "Sky Garden", lat: 51.5113, lng: -0.0836, type: "sight" },
  { name: "Trafalgar Square", lat: 51.508, lng: -0.1281, type: "sight" },
  { name: "Hard Rock Café", lat: 51.5116, lng: -0.1324, type: "sight" },
  {
    name: "Leake Street Arches (Graffiti-Tunnel)",
    lat: 51.5018,
    lng: -0.1138,
    type: "sight",
  },
];

export default function MapComponent() {
  return (
    <MapContainer
      center={[51.505, -0.12]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
      aria-label="Karte mit Orten in London"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <strong>{location.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
