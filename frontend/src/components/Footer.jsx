// Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram,FaFacebook,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer class="top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-t border-emerald-800">
    <div class=" p-12 ">
        <div class="sm:flex sm:justify-between sm:items-start mb-10 sm:mb-0">
            <div class="mb-5 sm:mb-0">
                <h3 class="text-2xl text-emerald-400 font-bold font-roboto-slab mb-3">About the store</h3>
                <ul>
                    <li class="mb-2 hover:text-emerald-400">
                        <Link href="/">Home</Link>
                    </li>
                    <li class="mb-2 hover:text-emerald-400">
                        <Link href="#">Become a customer</Link>
                    </li>
                    <li class="mb-2 hover:text-emerald-400">
                        <Link href="#">About us</Link>
                    </li>
                    <li class="mb-2 hover:text-emerald-400">
                        <Link href="#">FAQ</Link>
                    </li>
                    <li class="mb-2 hover:text-emerald-400">
                        <Link href="#">Return policy</Link>
                    </li>
                    <li class="mb-2 hover:text-emerald-400">
                        <Link href="#">Contact us</Link>
                    </li>
                </ul>
            </div>
            <div class="sm:w-1/4 mb-5 sm:mb-0">
                <h3 class="text-2xl text-emerald-400 font-bold font-roboto-slab mb-3">Language</h3>
                <div class="w-full flex flex-wrap">
                    <a class="mr-3 hover:text-emerald-400" href="#">Deutsch</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">English</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Espagnol</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Francais</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Indonesian</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Italian</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Nederlands</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Poinisch</a>
                    <a class="mr-3 hover:text-emerald-400" href="#">Portugues</a>
                </div>
            </div>
            <div>
                <h3 class="text-2xl text-emerald-400 font-bold font-roboto-slab mb-3">Get in touch</h3>
                <div class="flex w-full justify-between ">
                    <a href="#" target="_blank" >
                        <FaWhatsapp className='size-6 hover:text-emerald-400'/>
                    </a>
                    <a href="#" target="_blank" >
                        <FaInstagram className='size-6 hover:text-emerald-400'/>
                    </a>
                    <a href="#" target="_blank">
                        <FaXTwitter className='size-6 hover:text-emerald-400'/>
                    </a>
                    <a href="#" target="_blank">
                        <FaFacebook className='size-6 hover:text-emerald-400'/>
                    </a>
                    <a href="#" target="_blank">
                        <FaGithub className='size-6 hover:text-emerald-400'/>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex ">
            <span class="text-slate-500 font-mukta font-bold mx-auto">© 2024 E-Commerce. All rights
                reserved.</span>
        </div>
    </div>
</footer>
    );
};

export default Footer;