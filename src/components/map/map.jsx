import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import { API_KEY } from '../../constants/mapApiKey';

export const Map = ({center, zoom, markers}) => {
  const [mapKey, setMapKey] = useState(0); // A state variable to trigger re-render of the Map component

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });
  const handleRouteChange = () => {
    setMapKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    handleRouteChange();
  }, [markers])
  

    const mapStyles = {
        height: '100%',
        width: '100%',
        minHeight: '500px'
      };
      
  return (
    <>
   {isLoaded && <GoogleMap
      mapContainerStyle={mapStyles}
      center={center}
      zoom={zoom}
      key={mapKey}

    >
      {markers.map((marker, index) => (
            <div key={index}>
              <Marker  position={marker} />
            </div>
      ))}
    </GoogleMap>}
  </>
  )
}
