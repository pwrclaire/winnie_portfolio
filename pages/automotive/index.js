import React from 'react';
import Image from 'next/image'

export default function Cars() {
	return (
		<>
			<div className='grid grid-cols-2 w-full h-1/2 lg:grid-cols-1'>
				{/* bmw */}
				<a a href="/automotive/bmw">
					<div style={{ width: '100%', height: '80%', position: 'relative' }}>
					<p className='absolute z-10 w-full align-center text-white text-center text-7xl md:text-5xl sm:text-2xl inset-y-1/3 pointer-events-none'>BMW 340i</p>
						<Image className="relative shadow-md brightness-50 hover:brightness-100 object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/bmw/BMW340i_9_hh9jcw.jpg" width={6} height={8} layout='responsive' objectFit='cover' />
					</div>
				</a>
				{/* jaguar */}
				<a a href="/automotive/jaguar">
					<div style={{ width: '100%', height: '80%', position: 'relative' }}>
					<p className='absolute align-center w-full text-center z-10 text-white text-7xl md:text-5xl sm:text-2xl inset-y-1/3 pointer-events-none'>Jaguar F-Type</p>
						<Image className="brightness-50 hover:brightness-100 relative shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642146255/winnie/jaguar/Headlight_uplu4q.jpg" width={6} height={8} layout='responsive' objectFit='cover' />
					</div>
				</a>
			</div>
			<div>
				<a a href="/automotive/honda">
					<div style={{ width: '100%', height: '100%', position: 'relative' }}>
						<p className='absolute z-10 w-full align-center text-white text-center text-7xl md:text-5xl sm:text-2xl  inset-y-1/2 pointer-events-none'>Honda Civic Hatchback Sport</p>
						<Image className="brightness-50 hover:brightness-100 relative shadow-md object-right" src="https://res.cloudinary.com/wrp/image/upload/v1642576911/winnie/civic/DSC_1924_lnrjjf.jpg" width={9} height={6} layout='responsive' objectFit='cover' />
					</div>
				</a>
			</div>
		</>
	)
}