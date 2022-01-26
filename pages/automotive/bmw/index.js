import React from 'react';
import Image from 'next/image'
import { Banner } from '../../../components/banner';

export default function BWM() {
  return (
    <div>
      {Banner('BMW 340i')}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-col">
        <div className='col-span-2'>
            <Image className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg" width={9} height={6} layout='responsive'/>
        </div>
        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/bmw/BMW340i_2_dtds49.jpg" width={2} height={3} layout='responsive'/>
        <div className='grid grid-row-2 gap-2 md:flex md:flex-col'>
            <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/bmw/BMW340i_5_o5jmkn.jpg" width={9} height={6} layout='responsive'/>
            <Image className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_8_utwtuh.jpg" width={9} height={6} layout='responsive'/>
        </div>
        <div className='col-span-2'>
        <Image className="object-cover shadow-md object-bottom " src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/bmw/BMW340i_4_u43k7z.jpg" width={9} height={6} layout='responsive'/>
        </div>
        </div>
    </div>
  )
}