import React from 'react'
import Image from 'next/image'
import { FaUserFriends } from "react-icons/fa";
function CarListItem({car, distance}) {
  return (
    <div>
        <div className='flex items center justify-between mt-1'>
          <div className='flex items-center gap-5 m-3'>
            <Image src={car.image}
            width={100} height={100}/>
            <div>
                <h2 className='font-semibold text-[18px] flex gap-5 items-center'>
                {car.name}
                
                  <span className='flex gap-2 font-normal text-[16px] items-center'>
                  <FaUserFriends />{car.seat}
                  </span>
                </h2>
                <p>{car.desc}</p>
            </div>
        </div>
    <h2 className='text-[18px] font-semibold mt-9'>₹{(car.amount*distance).toFixed(2)}</h2>
    </div>
    </div>
  )
}

export default CarListItem
