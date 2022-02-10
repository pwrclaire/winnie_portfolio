import React from "react";
import Image from "next/image";
import Nav from "../../../components/nav";

export default function Jhan() {
  return (
    <>
    <Nav />
      <div className='mt-16 p-6 relative'>
      <h2 className='text-5xl md:text-4xl text-center py-6'>Khushboo & J Han</h2>

      <div className="grid grid-cols-2 gap-6 md:flex md:flex-col">
        <div className="col-span-2">
          <Image
            className="object-cover shadow-md object-right"
            src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush8_inr3jq.jpg"
            width={2}
            height={1}
            layout="responsive"
          />
        </div>
        <Image
          className="object-cover shadow-md"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush3_jcxsrl.jpg"
          width={2}
          height={3}
          layout="responsive"
        />
        <Image
          className="object-cover shadow-md"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush4_epzld2.jpg"
          width={2}
          height={3}
          layout="responsive"
        />
       
        <Image
          className="object-cover"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush9_kyg5ii.jpg"
          width={6}
          height={9}
          layout="responsive"
        />

        <Image
          className="object-cover"
          src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush6_ywxlhm.jpg"
          width={6}
          height={9}
          layout="responsive"
        />
        <div className="col-span-2">
          <Image
            className="object-cover shadow-md object-bottom "
            src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush7_pzmutz.jpg"
            width={9}
            height={6}
            layout="responsive"
          />
        </div>
      </div>
    </div>
    </>
  );
}
