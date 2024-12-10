"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
      <Image src={'/logo.svg'} width={40} height={40} alt="logo"/>
      <h2 className='font-bold text-lg'>Room ReDesign</h2>
      </div>
      
      <div className='flex gap-2 items-center'>
        <UserButton />
      </div>
    </div>
  )
}

export default Header