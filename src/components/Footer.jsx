import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="m-2 bg-teal-400 p-5 rounded shadow-inner text-white">
            <div className="flex flex-wrap items-center justify-between gap-4 ">


                <div className="flex  gap-6 justify-center">

                    <div className="flex gap-4 text-2xl">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            <FaXTwitter />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            <FaLinkedin />
                        </a>
                    </div>


                    <div className="text-sm flex items-center justify-center ml-[500px] font-serif font-bold text-blue-600 transition-colors hover:text-orange-800">
                        <span>Created By</span>
                        <span className="ml-2">{'\u00A9'} Promita {year}</span>
                    </div>
                </div>

            </div>
        </footer>

    )
}
