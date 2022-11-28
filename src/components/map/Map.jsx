import React  from 'react'
import GoogleMapReact from 'google-map-react'
import SvgLocation from './SvgLocation'

const LocationPin = ({ text }) => (
    <div >
        <SvgLocation />
        <p>{text}</p>
    </div>
)
// 

const Map = () => {
    const defaultProps = {     
        center: {
            address: '1600 Amphitheatre Parkway, Mountain View, california.',
            lat: 37.42216,
            lng: -122.08427,
        },
        zoom: 11
    };
  return (
    <div >
    <h2 >Come Visit Us At Our Campus</h2>

        <div style={{height: '80vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}  // You api key...
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <LocationPin
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text={defaultProps.center.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)} 
export default Map

