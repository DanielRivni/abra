// import { useLocation } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tileLayer from './util/tileLayer';
import "leaflet/dist/leaflet.css";

const center = [32.0853, 34.7818];

const MapWrapper = () => {

    // const location = useLocation();
    // const places = location.state?.places || [];

  return (
    <div>
        <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ width: '50%', height: '500px', border: '1px solid #ccc' }}>
        <TileLayer {...tileLayer} />
            <Marker position={center}>
                <Popup>Tel Aviv</Popup>
            </Marker>
        </MapContainer>
        {/* <h2>Places:</h2>
        <ul>
            {places.map((place) => (
            <li key={place.id}>{place.name} - {place.city}</li>
            ))}
        </ul> */}
    </div>
    
  )
}

export default MapWrapper;