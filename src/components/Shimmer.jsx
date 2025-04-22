import React from 'react'
import { CgIcecream } from "react-icons/cg";

export const Shimmer = () => {
    return (
        <>
            <div className='border  h-60 border-black bg-indigo-800 flex flex-col items-center '>
                < CgIcecream className='text-white text-7xl mt-[100px] animate-bounce ' />
                <h1 className=' text-center  font-bold text-4xl text-white animate-pulse '> Searching best restaurants for you</h1>

            </div>

            <div className='flex flex-wrap gap-12 mt-8 '>
                {Array(18).fill("").map((_, index) => (
                    <div key={index} className="w-52 h-64  rounded-lg shadow-md animate-pulse gap-7">
                        <div className="w-full h-32 shimmer-card rounded-t-lg"></div>
                        <div className="p-3 space-y-2">
                            <div className="h-4  shimmer-card rounded w-3/4"></div>
                            <div className="h-4  shimmer-card rounded w-2/4"></div>
                            <div className="h-4   shimmer-card rounded w-1/2"></div>

                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}
