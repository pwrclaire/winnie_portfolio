import React from 'react';
import Image from 'next/image'

export default function Cars() {
    return (
        <div className='grid grid-cols-2 w-full h-screen'>
            {/* bmw */}
            <a a href="/automotive/bmw">
            <p className='absolute z-10 w-1/2 align-center text-white text-center text-7xl inset-y-1/3 pointer-events-none'>BMW</p>
            <Image className="object-cover relative shadow-md brightness-50 hover:brightness-100 object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg" width={6} height={9} layout='responsive'/>
            </a>
            {/* jaguar */}
            <a a href="/automotive/jaguar">
            <p className='absolute w-1/2 align-center text-center z-10 text-white text-7xl inset-y-1/3 pointer-events-none'>Jaguar</p>
            <Image className="brightness-50 hover:brightness-100 object-cover relative shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Headlight_uplu4q.jpg" width={6} height={9} layout='responsive'/>
            </a>
        </div>
    )
}