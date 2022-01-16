import React from 'react';
import Image from 'next/image'
import { Banner } from '../../../components/banner';

export default function Jhan() {
  return (
    <div>
      {Banner('Jhan & Kushboo')}
      <div className="grid grid-cols-2 gap-2">
        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush3_jcxsrl.jpg" width={2} height={3} layout='responsive' />
        <Image className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush4_epzld2.jpg" width={2} height={3} layout='responsive' />
        <Image className='object-cover' src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush9_kyg5ii.jpg" width={9} height={6} layout='responsive' />
        <Image className="object-cover shadow-md object-bottom " src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush7_pzmutz.jpg" width={2} height={1} layout='responsive' />
        <div className='col-span-2'>
          <Image className="object-cover shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush8_inr3jq.jpg" width={2} height={1} layout='responsive' />
        </div>
      </div>
      <br />
    </div>
  )
}