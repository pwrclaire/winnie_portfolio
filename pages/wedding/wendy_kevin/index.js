import React from 'react';
import Image from 'next/image'
import Nav from '../../../components/nav';

export default function Chris() {
	return (
		<>
		<Nav />
      <div className='mt-16 p-6 relative'>
			<h2 className='text-5xl md:text-4xl text-center py-6'>Wendy & Kevin</h2>
			<div className="grid grid-cols-2 gap-6 md:flex md:flex-col">
				<div className='col-span-2'>
					<Image priority className="object-cover shadow-md object-center" src="https://res.cloudinary.com/wrp/image/upload/v1647931307/winnie/wendy_kevin/KW-219_y9i4gy.jpg" width={2} height={3} layout='responsive' />
				</div>
				<Image priority className="object-cover object-top shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-117_dis4eg.jpg" width={2} height={3} layout='responsive' />
				<Image priority className="object-cover object-top shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-114_i14dus.jpg" width={2} height={3} layout='responsive' />
				<Image priority className='object-cover object-top shadow-md' src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-209_hbmbaa.jpg" width={5} height={7} layout='responsive' />
				<Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-217_juazvh.jpg" width={5} height={7} layout='responsive' />
				<div className='col-span-2'>
					<div className='grid grid-cols-3 gap-6 md:flex md:flex-col'>
						<Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1647933123/winnie/wendy_kevin/KW-233_cv3fpw.jpg" width={2} height={3} layout='responsive' />
						<Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1647933121/winnie/wendy_kevin/KW-170_yjkwxu.jpg" width={2} height={3} layout='responsive' />
						<Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1647933124/winnie/wendy_kevin/KW-232_a4aquq.jpg" width={2} height={3} layout='responsive' />

					</div>
				</div>
				<Image priority className='object-cover object-top shadow-md' src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-210_j3u0b5.jpg" width={5} height={7} layout='responsive' />
				<Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146254/winnie/wendy_kevin/KW-203_nasmdq.jpg" width={5} height={7} layout='responsive' />
				<div className='col-span-2'>
					<Image priority className="object-cover shadow-md" src="https://res.cloudinary.com/wrp/image/upload/v1642146253/winnie/wendy_kevin/KW-235_mzcrgt.jpg" width={9} height={6} layout='responsive' />
				</div>
			</div>
		</div>
		</>
	)
}