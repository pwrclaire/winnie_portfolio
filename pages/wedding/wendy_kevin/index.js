import React from 'react';
import Image from 'next/image'
import { Banner } from '../../../components/banner';

export default function Chris() {
    return (
        <div>
            {Banner('Wendy & Kevin')}
            <div className="grid grid-cols-2 gap-2">
                <div className='col-span-2'>
                    <Image className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-218_x0auj7.jpg" width={9} height={6} layout='responsive' />
                </div>
                <Image className="object-cover object-top shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-117_dis4eg.jpg" width={2} height={2} layout='responsive' />
                <Image className="object-cover object-top shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-114_i14dus.jpg" width={2} height={2} layout='responsive' />
                <Image className='object-cover object-top shadow-md' src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-209_hbmbaa.jpg" width={6} height={7} layout='responsive' />
                <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-217_juazvh.jpg" width={6} height={7} layout='responsive' />
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 gap-2'>
                        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-233_sobe2o.jpg" width={2} height={3} layout='responsive' />
                        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-170_tscyff.jpg" width={2} height={3} layout='responsive' />
                        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-232_jin5tp.jpg" width={2} height={3} layout='responsive' />

                    </div>
                </div>
                <Image className='object-cover object-top shadow-md' src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-210_j3u0b5.jpg" width={6} height={7} layout='responsive' />
                <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-203_nasmdq.jpg" width={6} height={7} layout='responsive' />
                <div className='col-span-2'>
                    <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-235_mzcrgt.jpg" width={9} height={6} layout='responsive' />
                </div>
            </div>
        </div>
    )
}