import React from 'react';
import Image from 'next/image'
import { Banner } from '../../../components/banner';

export default function Jaguar() {
  return (
    <div>
      {Banner('Jaguar F-Type')}
      <div className="grid grid-cols-2 gap-2 md:flex md:flex-col">
        <div className='col-span-2'>
          <Image className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Headlight_uplu4q.jpg" width={9} height={6} layout='responsive' />
        </div>
        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Emblem_coltjb.jpg" width={2} height={3} layout='responsive' />
        <div className='grid grid-row-2 gap-2'>
          <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/jaguar/SteeringWheel_eiy74j.jpg" width={9} height={6} layout='responsive' />
          <Image className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/ShiftKnob_wjx5e6.jpg" width={9} height={6} layout='responsive' />
        </div>
        <Image className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Sound_w9nm8b.jpg" width={2} height={1} layout='responsive' />
        <Image className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/FrontKnobs_upwqfd.jpg" width={2} height={1} layout='responsive' />
        <div className='col-span-2 '>
          <Image className="object-cover shadow-md object-bottom " src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Backshot_gbahkb.jpg" width={9} height={6} layout='responsive' />
        </div>
      </div>
    </div>
  )
}