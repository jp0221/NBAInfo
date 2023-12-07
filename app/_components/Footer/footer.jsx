'use client'
import Image from 'next/image';
// react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="bg-cover bg-center bg-gradient-to-t from-gray-900 to-blue-900">
            <footer className="text-white py-12 px-8">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
                        <div className="flex items-center mb-4">

                            <h3 className="text-xl font-bold">NBAConnect</h3>
                        </div>
                        <p className="text-sm">
                            Your ultimate hub for NBAConnect passion and excellence. Elevate your game with exclusive tips, videos, and community events.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center md:justify-end">
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="w-full mt-8 text-center">
                        <p className="text-sm">
                            &copy; 2023 NBAConnect. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
