import React from 'react';
import { useWindowTop } from './hooks';

export const Banner = (title) => {
    const showBanner = useWindowTop();
    return (
        <div className={`absolute w-full h-screen opacity-75 z-10 ${!showBanner ? "bg-none" : "bg-black"} transition-all duration-500`}>
            <div className={`z-20 text-7xl text-white relative text-center inset-y-1/3 ${!showBanner && 'hidden'}`}>{title}</div>
        </div>
    )
}