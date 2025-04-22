import React from 'react'
import { categoryInfo } from '../Utilis/categoryData'

export const Category = () => {
    return (
        <div className="w-full h-auto  bg-white  p-4">
            <h1 className="font-bold text-lg ml-36 ">What's in your mind?</h1>
            <div className="flex overflow-x-auto space-x-6  ml-36" >
                {categoryInfo.map(item => (
                    <a
                        key={item.id}

                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex-shrink-0 w-24 '>

                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}

                            alt={item.accessibility.altText}
                            className='w-[200px] h-[110px] rounded-full object-cover size-40  ' />

                    </a>


                ))}

            </div>

        </div>
    )
}
