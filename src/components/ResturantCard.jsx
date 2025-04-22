import React from 'react'



export const ResturantCard = ({
    id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, slaString, discountInfo, veg, isOpen
}) => {
    return (
        <>
            <div className=" w-72 rounded-xl shadow-md border border-gray-100   bg-white overflow-hidden transition-transform duration-300  hover:cursor-pointer  hover:scale-95">
                <div className='relative w-full h-[160px]'>
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
                        alt={name}
                        className=" w-72  h-40 object-cover  rounded-lg" />


                    {discountInfo && discountInfo !== "None" && (
                        <div className="absolute bottom-0 left-0 w-full text-white font-bold bg-gradient-to-t from-black/80 to-transparent  px-3 py-2">{discountInfo}
                        </div>
                    )}
                </div>
                <div className='p-4'>
                    <div className='mb-2'>
                        {veg ? (<span><img src="veg.svg" className='size-10' /></span>) : (<span><img src="nonveg.svg" className='size-10' /></span>)}


                    </div>
                    <h1 className="text-sm text-black truncate font-serif font-extrabold ">{name}</h1>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
                        <span className='bg-green-500 text-white px-2 py-0.5 rounded text-xs font-medium mt-2'>{avgRating}★</span>
                        <span>{slaString}</span>
                        <span>{costForTwo}</span>

                    </div>
                    <p className="text-sm font-bold text-gray-600 whitespace-normal  mt-2">{cuisines.join(",")}</p>





                </div>
            </div>
        </>
    )
}
