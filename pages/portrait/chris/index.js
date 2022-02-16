import React from 'react';
import Image from 'next/image'
import Nav from '../../../components/nav';

export default function Chris() {
  return (
    <>
    <Nav />
    <div className='mt-16 p-6 relative'>
    <h2 className='text-5xl md:text-4xl text-center py-6'>Chris & Raph</h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:flex md:flex-col">
        <div className='col-span-2'>
          <Image priority className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3436_m2ezxi.jpg" width={9} height={6} layout='responsive' />
        </div>
        <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3430_msxbvd.jpg" width={2} height={3} layout='responsive' />
        <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3384_r4ccgg.jpg" width={2} height={3} layout='responsive' />
        <div className='col-span-2'>
          <div className='grid grid-cols-3 gap-6 md:flex md:flex-col'>
            <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3502_knlqwx.jpg" width={2} height={3} layout='responsive' />
            <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3373_a0yjgw.jpg" width={2} height={3} layout='responsive' />
            <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3532_ki646z.jpg" width={2} height={3} layout='responsive' />
          </div>
        </div>
        <Image priority className='object-cover shadow-md' src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3392_gm7qxx.jpg" width={6} height={9} layout='responsive' />
        <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3471_bufscv.jpg" width={6} height={9} layout='responsive' />
        <div className='col-span-2'>
          <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3350_taz9uy.jpg" width={9} height={6} layout='responsive' />
        </div>
        {/* <div className='col-span-2'>
        <Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/chris_raph/DSC_3375_lotz9e.jpg" width={6} height={9} layout='responsive' />
        </div> */}
      </div>
    </div>
    </>
  )
}