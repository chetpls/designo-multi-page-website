import CallToAction from "../components/CallToAction";
import LocationData from "../data/locations.json";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Locations() {
        const locationItems = LocationData.map((location) => (
          <li className="locationItem" key={location.slug}>
            <div className="locationContainer">
              <div className="locationMap">
                <MapContainer className="map"
                  center={[location.lat, location.lng]}
                  zoom={13}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[location.lat, location.lng]}>
                    <Popup>
                      {location.office_name}<br />
                      {location.address.number} {location.address.street}<br />
                      {location.address.city} {location.address.postal}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="locationContent">
                <h1>{location.country}</h1>
                <div className="locationAddress">
                  <h3>{location.office_name}</h3>
                  <p>
                    {location.address.number} {location.address.street}
                  </p>
                  <p>
                    {location.address.city} {location.address.postal}
                  </p>
                </div>
                <div className="locationContact">
                <h3>Contact</h3>
                  <p>P : {location.phone}</p>
                  <p>M : {location.email}</p>
                </div>
              </div>
            </div>
          </li>
        ));
	return (
		<main className="locationsMain">
			<section id="locationsSection">
				<ul className="locationsList">{locationItems}</ul>
			</section>
			<CallToAction />
		</main>
	);
}

export default Locations;
