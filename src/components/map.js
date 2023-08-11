import  L  from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import MarkerIcon from '../assets/images/iconM.svg';
import './../../node_modules/leaflet/dist/leaflet.css';
function Map() {
    const coords= [20.34920332931903, 85.80774682469512];
    const customMarker = new L.Icon({
        iconUrl: MarkerIcon,
        iconSize: [40, 40],
        iconAnchor: [0, 0],
        popupAnchor: [20, -10]
    })
    return(
        <div className="container" id="map">
            <div className="imgHolder">
                <MapContainer center={coords} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    />
                    <Marker position={coords} icon={customMarker}>
                        <Popup>
                          Our main office.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}
export default Map;