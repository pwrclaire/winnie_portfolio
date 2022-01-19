import React from 'react';
import Image from 'next/image'
import { Banner } from '../../../components/banner';

export default function Chris() {
    return (
        <div>
            {Banner('Chris & Raph')}
            <div className="grid grid-cols-2 gap-2">
                <div className='col-span-2'>
                    <Image className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3436_m2ezxi.jpg" width={9} height={6} layout='responsive' />
                </div>
                <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3384_r4ccgg.jpg" width={2} height={3} layout='responsive' />
                <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3430_msxbvd.jpg" width={2} height={3} layout='responsive' />
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 gap-2'>
                        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3502_knlqwx.jpg" width={2} height={3} layout='responsive' />
                        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3373_a0yjgw.jpg" width={2} height={3} layout='responsive' />
                        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3532_ki646z.jpg" width={2} height={3} layout='responsive' />
                    </div>
                </div>
                <Image className='object-cover shadow-md' src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3392_gm7qxx.jpg" width={9} height={6} layout='responsive' />
                <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3471_bufscv.jpg" width={2} height={1} layout='responsive' />
                <div className='col-span-2'>
                    <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3350_taz9uy.jpg" width={9} height={6} layout='responsive' />
                </div>
            </div>
        </div>
    )
}