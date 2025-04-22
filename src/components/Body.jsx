import React, { useState, useEffect } from "react";
import { ResturantCard } from "./ResturantCard";
import { FaSearch } from "react-icons/fa";
import { Category } from "./Category";
import { Menu } from "./Menu";
import restaurantList from "../Utilis/restuarantList";
import { Shimmer } from "./Shimmer";

export const Body = () => {
    const [allRestaurants, setAllrestaurants] = useState([]);
    const [filter, SetFilter] = useState([]);
    const [search, SetSearch] = useState("")


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await Data.json();

        console.log(json)
        const rest = json?.data?.cards?.find((card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants

        if (rest && Array.isArray(rest)) {
            const filtered = rest.map((r) => {
                const info = r.info;
                return {
                    ...info,
                    slaString: info?.sla?.deliveryTime + "mins",
                }
            });
            setAllrestaurants(filtered);
            SetFilter(filtered);

        }


    }

    const searchBar = () => {
        const filtered = allRestaurants.filter((rest) =>
            rest.name.toLowerCase().includes(search.toLowerCase())
        )
        SetFilter(filtered)
    }
    const filterByRating = () => {
        const filtered = allRestaurants.filter((rest) =>
            rest.avgRating > 4.5
        )

        SetFilter(filtered)
    }

    const filterFastDelivery = () => {
        const filtered = allRestaurants.filter((rest) =>
            rest.slaString < "27mins"
        )
        SetFilter(filtered)
    }
    const filterByVeg = () => {
        const filtered = allRestaurants.filter((rest) =>
            rest.veg == true
        )
        SetFilter(filtered)
    }


    const filterByPrice = () => {
        const filtered = allRestaurants.filter((rest) =>
            rest.costForTwo < "₹300"
        )
        SetFilter(filtered)
    }

    const resetFilter = () => {
        SetFilter(allRestaurants);
        SetSearch("");
    }

    //if (allRestaurants.length === 0) {
    //    return (
    //        <Shimmer />
    //    )
    //}
    return allRestaurants.length === 0 ? < Shimmer /> : (
        <div>

            <Category />
            <Menu />
            <div className="flex items-center gap-3 mt-7 ml-36">
                <h1 className="text-lg font-semibold font-serif">Search</h1>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => SetSearch(e.target.value)}
                        placeholder="Search"
                        className="border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={searchBar}>  <FaSearch className="text-gray-600 ml-1" /></button>

                    <button className="ml-4 rounded-xl border  border-gray-600 px-2 shadow-lg bg-slate-100" onClick={filterFastDelivery}>Fast Delivery</button>
                    <button className="ml-4 rounded-xl border  border-gray-600 px-2 shadow-lg bg-slate-100" onClick={filterByRating} >


                        Rating 4.0+</button>
                    <button className="ml-4 rounded-xl border  border-gray-600 px-2 shadow-lg bg-slate-100" onClick={filterByVeg}>Pure Veg</button>

                    <button className="ml-4 rounded-xl border  border-gray-600 px-2 shadow-lg bg-slate-100" onClick={filterByPrice}>
                        Less than ₹300
                    </button>
                    <button className="ml-4 rounded-xl border  border-gray-600 px-2 shadow-lg bg-slate-100" onClick={resetFilter}>Reset </button>

                </div>
            </div>
            <div className="mt-5 ml-36  flex flex-wrap gap-7">
                {filter.map((rest) => (
                    <ResturantCard key={rest.id}{...rest} />
                ))}

            </div>
        </div>
    );
};
