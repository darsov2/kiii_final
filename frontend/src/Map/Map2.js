import React from "react";
import useGet from "../Hooks/useGet";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'react-leaflet/dist/images/marker-shadow.png';



const Map2 = (props) => {



    const {data, setData, isLoading, getData} = useGet('/api/landmarks')

    return(
        <MapContainer style={{ height: '80vh', width: '100%' }} center={props.center} zoom={props.landmark === 'true' ? 17 : 15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(props.data.length > 0) && props.data.map(landmark => {
                return (<Marker icon={new Icon({iconUrl: icon})} position = {[landmark.latitude, landmark.longtitude]}>
                    <Popup>
                        <h3>{landmark.opis}</h3>
                        <h5>{landmark.adresa}</h5>
                    </Popup>
                </Marker>)
            })}
        </MapContainer>

    )
}

export default Map2;