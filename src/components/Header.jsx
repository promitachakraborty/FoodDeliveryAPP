import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbCircleCaretLeft } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FcAssistant } from "react-icons/fc";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartSharp } from "react-icons/io5";
export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const showMenu = () => {
        setToggle(true);
    };
    const hiddenMenu = () => {
        setToggle(false);
    };

    const links = [
        {
            icons: <FaSearch />,
            name: "Search",
        },
        {
            icons: <RiDiscountPercentFill />,
            name: "Offers",
            sup: "New",
        },
        {
            icons: <FcAssistant />,
            name: "Help",
        },
        {
            icons: <RiAccountCircleLine />,
            name: "Sign In",
        },
        {
            icons: <IoCartSharp />,
            name: "Cart",
        },
    ];
    return (
        <>
            <div
                className="black-overlay  w-full h-full fixed duration-500 "
                onClick={hiddenMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                {" "}
                <div
                    className="bg-slate-100 w-[500px] h-full duration-300  absolute"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    style={{
                        left: toggle ? "0%" : "-100%",
                    }}
                >
                    {" "}
                </div>
            </div>
            <header className="p-4 shadow-2xl ">
                <div className="max-w-[1500px] mx-auto py-4  flex items-center  ">
                    <div className="hover:scale-125 transition-transform duration-300 inline-block">
                        <IoFastFoodOutline size={40} />
                    </div>
                    <div>
                        <h1 className="ml-4">
                            <span className=" font-bold transition-colors duration-300 hover:underline hover:text-blue-600 cursor-pointer ">
                                Barrackpore,
                            </span>{" "}
                            Kolkata, West Bengal, India{"    "}
                            <TbCircleCaretLeft
                                className="inline "
                                size={20}
                                cursor="pointer"
                                onClick={showMenu}
                            />
                        </h1>
                    </div>

                    <nav className="flex items-center list-none gap-4 ml-auto font-serif font-semibold mr-5 ">
                        {links.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="transition-color duration-200 hover:text-blue-600 hover:underline cursor-pointer gap-3.5"
                                >
                                    <div className="flex items-center gap-2">
                                        {" "}
                                        {link.icons}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </div>
                                </li>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </>
    );
};
