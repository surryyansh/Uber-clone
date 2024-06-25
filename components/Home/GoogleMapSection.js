import React, { useContext, useEffect, useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';
function GoogleMapSection() {
  const containerStyle = {
    width: '100%',
    height: window.innerWidth*0.4
  };
  const {source,setSource}=useContext(SourceContext);
  const {destination,setDestination}=useContext(DestinationContext);
  const [center,setCenter]=useState( {
    lat: -3.745,
    lng: -38.523
 });
  const [map, setMap]=React.useState(null)
  const [directionRoutePoints,setDirectionRoutePoints]=useState([]);
  useEffect(()=>{
    if(source?.length!=[]&&map)
      {map.panTo(
        {
          lat: source.lat,
          lng: source.lng
        }
      )
        setCenter({
          lat: source.lat,
          lng: source.lng
        });
      }

      if(source.length!=[]&&destination.length!=[])
        {
          directionRoute();
        }
  },[source])

  useEffect(()=>{
    if(destination?.length!=[]&&map)
      {
        setCenter({
          lat: destination.lat,
          lng: destination.lng
        })
      }

      if(source.length!=[]&&destination.length!=[])
        {
          directionRoute();
        }
  },[destination])

  const directionRoute=()=>{
    const DirectionsService=new google.maps.DirectionsService();
    DirectionsService.route({
      origin:{lat:source.lat, lng:source.lng},
      destination:{lat:destination.lat,lng:destination.lng},
      travelMode:google.maps.TravelMode.DRIVING
    },(result,status)=>{
        if(status===google.maps.DirectionsStatus.OK)
        {
           setDirectionRoutePoints(result)
        }
        else{
          console.error('Error');
        }
    })
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId: 'b3c32b57acc1ce63'}}
      >
        {source.length!=[]?  <MarkerF
        position={{lat:source.lat,lng:source.lng}}  
        icon={{
          url:"/source.png",
          scaledSize:{
            width:25,
            height:25
          }
        }}
       >
<OverlayViewF position={{lat:source.lat,lng:source.lng}}
mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
  <div className='p-2 bg-black font-bold inline-block'>
    <p className='text-white text-[16px]'>{source.label}</p>
  </div>
</OverlayViewF>
</MarkerF>:null}

{destination.length!=[]?  <MarkerF
        position={{lat:destination.lat,lng:destination.lng}}  
        icon={{
          url:"/destn.png",
          scaledSize:{
            width:25,
            height:35
          }
        }}
        ><OverlayViewF position={{lat:destination.lat,lng:destination.lng}}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className='p-2 bg-black font-bold inline-block'>
            <p className='text-white text-[16px]'>{destination.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>:null}


        <DirectionsRenderer
          directions={directionRoutePoints}
         options={{
          polylineOptions:{
            strokeColor:'#000',
            strokeWeight:6.5
          },
           suppressMarkers:true
        }}
        />
        
    <></>
      </GoogleMap>
  ) 
}

export default GoogleMapSection