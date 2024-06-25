"use client"
import React, { useContext, useEffect, useState } from 'react'
import InputItem from './InputItem';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';
import CarListOptions from './CarListOptions'; // Ensure this import is correct

function SearchSection() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState(null); // Initialize as null

  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(source.lat, source.lng),
      new google.maps.LatLng(destination.lat, destination.lng)
    );
    setDistance(dist * 0.0621374); // Convert meters to miles
  };

  useEffect(() => {
    if (source) {
      // Do something if needed
    }
    if (destination) {
      // Do something if needed
    }
  }, [source, destination]);

  return (
    <div>
      <div className='p-2 md:pd-6 border-[3px] rounded-xl'>
        <p className='text-[20px] font-bold'>Get a Ride</p>
        <InputItem type='source' />
        <InputItem type='destination' />
        <button className='p-3 bg-black w-full mt-5 text-white rounded-lg' onClick={calculateDistance}>Search For Rides</button>
      </div>
      {distance ? <CarListOptions distance={distance}/> : null}
    </div>
  );
}

export default SearchSection;
