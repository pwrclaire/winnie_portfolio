import React from "react";
import Image from "next/image";
import Nav from "../../../components/nav";

export default function Honda() {
  return (
    <>
    <Nav />
      <div className='mt-16 p-6 relative'>
        <h2 className='text-5xl md:text-4xl text-center py-6'>Honda Civic Hatchback Sport</h2>

      <div className="grid grid-cols-2 gap-6 md:flex md:flex-col">
        <div className="col-span-2">
          <Image
            className="object-cover shadow-md object-right"
            src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/DSC_1924_lnrjjf.jpg"
            width={9}
            height={6}
            layout="responsive"
          />
        </div>
        {/* <Image
          className="object-cover shadow-md"
          src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/HC_1_jvjbi1.jpg"
          width={2}
          height={3}
          layout="responsive"
        /> */}
        {/* <div className="col-span-2 gap-6"> */}
          <Image
            className="object-cover shadow-md"
            src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/HC6_yoxgut.jpg"
            width={6}
            height={5}
            layout="responsive"
          />
          <Image
            className="object-cover"
            src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/HC4_gg3cdt.jpg"
            width={6}
            height={5}
            layout="responsive"
          />
        {/* </div> */}
        <Image
          className="object-cover shadow-md"
          src="https://res.cloudinary.com/wrp/image/upload/v1642576912/winnie/civic/MG_2676_a26mlw.jpg"
          width={2}
          height={3}
          layout="responsive"
        />
        <Image
          className="object-cover shadow-md"
          src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/MG_2674_gu9sbw.jpg"
          width={2}
          height={3}
          layout="responsive"
        />
      </div>
      <div className="col-span-2 mt-6">
        <Image
          className="object-cover shadow-md object-right"
          src="https://res.cloudinary.com/wrp/image/upload/v1642576912/winnie/civic/DSC_1914_xiumjc.jpg"
          width={9}
          height={6}
          layout="responsive"
        />
      </div>
    </div>
    </>
  );
}
