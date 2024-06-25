import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon:'/taxi.png'
        },
        {
            id:2,
            name:'Package',
            icon:'/box.png'
        }
    ]
    return (
    <div className='p-4 pb-4 pl-10 border-b-[3.5px] border-gray-200 flex items-center justify-between' >
        <div className='flex gap-28 items-center'>
            <Image src='/uber.png'
            width={70} height={70}
            alt='Logo'/>
            <div className='flex gap-16 items-center'>
                {headerMenu.map((item)=>(
                    <div className='flex gap-3 items-center '>
                        <Image src={item.icon}
                        width={17} height={17}/>
                        <h2 className='text-[16px] font-semibold'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header
