import React from 'react';
import Image from 'next/image'
import Nav from '../../../components/nav';

export default function BWM() {
  return (
    <>
    <Nav />
      <div className='mt-16 p-6 relative'>
          <h2 className='text-5xl md:text-4xl text-center py-6'>BMW 340i</h2>
          <div className="grid grid-cols-2 gap-6 md:flex md:flex-col">
            <div className='col-span-2'>
                <Image priority className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg" width={9} height={6} layout='responsive'/>
            </div>
            {/* <div className='grid grid-row-2 md:flex md:flex-col'> */}
              <Image priority className="object-cover" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/bmw/BMW340i_2_dtds49.jpg" width={9} height={6} layout='responsive'/>
              <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_8_utwtuh.jpg" width={9} height={6} layout='responsive'/>
            {/* </div> */}
            <div className='col-span-2'>
              <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1647932910/winnie/bmw/BMW340i_5_qo9qrz.jpg" width={9} height={6} layout='responsive'/>
            </div>
              <Image priority className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/bmw/BMW340i_1_lypsxv.jpg" width={9} height={6} layout='responsive'/>
              <Image priority className="object-cover shadow-md object-bottom " src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/bmw/BMW340i_4_u43k7z.jpg" width={9} height={6} layout='responsive'/>
            <div className='col-span-2'>
            <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1647932911/winnie/bmw/BMW340i_7_fd4rcm.jpg" width={9} height={6} layout='responsive'/>
            </div>
          </div>
      </div>
    </>
  )
}