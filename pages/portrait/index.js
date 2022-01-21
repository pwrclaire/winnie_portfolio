import React from 'react';
import Image from 'next/image'

export default function People() {
	return (
		<div className='grid grid-cols-2 w-full h-screen lg:flex lg:flex-col'>
			{/* chris */}
			<div className='lg:h-screen'>
				<a a href="/portrait/chris">
					<div style={{ width: '100%', height: '100%', position: 'relative' }}>
						<p className='absolute z-10 w-full align-center text-white text-center text-5xl md:text-4xl inset-y-1/3 pointer-events-none'>Chris & Raph</p>
						<Image className="object-cover relative shadow-md brightness-50 hover:brightness-100 object-bottom h-screen" src="https://res.cloudinary.com/wrp/image/upload/v1642146257/winnie/chris_raph/DSC_3436_m2ezxi.jpg" width={6} height={7} layout='fill' objectFit='cover' />
					</div>
				</a>
			</div>

			{/* jhan */}
			<div className='lg:h-screen'>
				<a a href="/portrait/jhan">
					<div style={{ width: '100%', height: '100%', position: 'relative' }}>
					<p className='absolute w-full align-center text-center z-10 text-white text-5xl inset-y-1/3 md:text-4xl pointer-events-none'>Khushboo & Jhan</p>
						<Image className="brightness-50 hover:brightness-100 object-cover relative shadow-md object-center lg:object-top md:object-center" src="https://res.cloudinary.com/wrp/image/upload/v1642146256/winnie/kush_jhan/JHan_Khush4_epzld2.jpg" width={6} height={7} layout='fill' />
					</div>
				</a>
			</div>

		</div>
	)
}