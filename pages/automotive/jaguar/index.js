import React from 'react';
import Image from 'next/image'
import Nav from '../../../components/nav';

export default function Jaguar() {
  return (
    <>
    <Nav />
    <div className='mt-16 p-6 relative'>
    <h2 className='text-5xl md:text-4xl text-center py-6'>Jaguar F-Type</h2>

      <div className="grid grid-cols-2 gap-6 md:flex md:flex-col">
        <div className='col-span-2'>
          <Image priority className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Headlight_uplu4q.jpg" width={9} height={6} layout='responsive' />
        </div>
        <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/jaguar/SteeringWheel_eiy74j.jpg" width={4} height={3} layout='responsive' />
        <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/ShiftKnob_wjx5e6.jpg" width={4} height={3} layout='responsive' />
        
        <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Sound_w9nm8b.jpg" width={4} height={3} layout='responsive' />
        <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/FrontKnobs_upwqfd.jpg" width={4} height={3} layout='responsive' />
        <div className='col-span-2 '>
        <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Emblem_coltjb.jpg" width={4} height={3} layout='responsive' />
        </div>
        <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/FrontEmblem_gehtex.jpg" width={4} height={3} layout='responsive' />
        <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Door_rtfsnc.jpg" width={4} height={3} layout='responsive' />
        <div className='col-span-2 '>
          <Image priority className="object-cover shadow-md object-bottom " src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Backshot_gbahkb.jpg" width={9} height={6} layout='responsive' />
        </div>
      </div>
    </div>
    </>
  )
}