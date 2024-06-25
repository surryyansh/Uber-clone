import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div>
      <Image src='/ubercopy.jpg' width={900} height={1000}
      className='object-contain h-full w-full'/>
      <div className='absolute top-40 right-10'>
      <SignIn/>
      </div>
    </div>
    </>
  );
}

