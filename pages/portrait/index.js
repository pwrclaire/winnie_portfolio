import React from 'react';
import Image from 'next/image'

export default function People() {
    return (
        <div className='grid grid-cols-2 w-full h-screen'>
            {/* chris */}
            <a a href="/portrait/chris">
                <p className='absolute z-10 w-1/2 align-center text-white text-center text-5xl inset-y-1/3 pointer-events-none'>Chris & Raph</p>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image className="object-cover relative shadow-md brightness-50 hover:brightness-100 object-bottom h-screen" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3436_m2ezxi.jpg" width={6} height={7} layout='fill' objectFit='cover'/>
                </div>
            </a>
            {/* jhan */}
            <a a href="/portrait/jhan">
                <p className='absolute w-1/2 align-center text-center z-10 text-white text-5xl inset-y-1/3 pointer-events-none'>Khushboo & Jhan</p>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image className="brightness-50 hover:brightness-100 object-cover relative shadow-md object-center" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush4_epzld2.jpg" width={6} height={7} layout='fill' />
                </div>
            </a>

        </div>
    )
}