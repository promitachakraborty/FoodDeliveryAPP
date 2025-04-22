import React, { useState, useEffect } from 'react'
import { restaurantData } from '../Utilis/restaurantData'

const ResturantListCard = ({
    name, cloudinaryImageId, cuisines, avgRating, slaString, costForTwo, discountInfo
}) => {
    return (
        <div className="flex-shrink-0 w-72 rounded-xl shadow-md border border-gray-100   bg-white overflow-hidden transition-transform duration-300  hover:cursor-pointer  hover:scale-95">
            <div className='relative'>
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
                    alt={name}
                    className="w-full h-48 object-cover" /
                >

                {discountInfo && (<div className=' absolute bottom-0 left-0 w-full  text-white font-bold mt-20 bg-gradient-to-t from-black/80 to-transparent px-2 py-3 '>
                    {discountInfo}
                </div>)}

            </div>

            <div className="p-4">
                <h2 className="text-sm text-gray-600 truncate">{name}</h2>
                <p className='text-sm text-gray-600 truncate'>{cuisines.join(',')}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
                    <span className='bg-green-500 text-white px-2 py-0.5 rounded text-xs font-medium'>{avgRating}★</span>
                    <span>{slaString}</span>
                    <span>{costForTwo}</span>

                </div>



            </div>

        </div>
    )
}
export const Menu = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await res.json();

        console.log(json)


        const restListCard = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restListCard && Array.isArray(restListCard)) {
            const rest = restListCard.map((r) => {
                const info = r.info;
                return {
                    ...info,
                    slaString: info?.sla?.deliveryTime + "mins",



                };

            });
            setRestaurants(rest)

        }


    }



    return (
        <div className='p-4'>
            <h1 className="text-2xl font-bold mb-6 ml-36">List Of Top Restaurants In Your Area</h1>
            <div className='flex space-x-6 overflow-x-auto scrollbar-hide ml-36'>
                {restaurants.map((restaurant) => {
                    return (<ResturantListCard key={restaurant.id}{...restaurant} />)

                })}

            </div>

        </div>
    )
}
