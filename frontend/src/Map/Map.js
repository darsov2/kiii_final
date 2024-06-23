import React from "react";
import useGet from "../Hooks/useGet";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'react-leaflet/dist/images/marker-shadow.png';



const Map = () => {

    const position = [51.505, -0.09]

    const {data, setData, isLoading, getData} = useGet('/api/landmarks')

    return(
        <MapContainer style={{ height: '80vh', width: '100%' }} center={[41.99646, 21.43141]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(!isLoading && data.length > 0) && data.map(landmark => {
                console.log(landmark.latitude, landmark.longtitude)
                return (<Marker icon={new Icon({iconUrl: icon})} position = {[landmark.latitude, landmark.longtitude]}>
                    <Popup>
                        <h3>{landmark.opis}</h3>
                        <h5>{landmark.adresa}</h5>
                        <a href={'/discoverSight/' + landmark.znamenitostId}>Кон знаменитоста...</a>
                    </Popup>
                </Marker>)
            })}
        </MapContainer>

    )
}

export default Map;