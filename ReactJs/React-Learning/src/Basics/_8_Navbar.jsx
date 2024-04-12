import React from 'react';

function Navbar() {
    return (
        <nav className='bg-gradient-to-r from-orange-300 via-orange-500 to-pink-700 p-4 fixed top-0 w-full z-10'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold text-xl">Bhaktivedanta Library</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-white hover:text-orange-200">Home</a>
                        <a href="#" className="text-white hover:text-orange-200">About</a>
                        <a href="#" className="text-white hover:text-orange-200">Services</a>
                        <a href="#" className="text-white hover:text-orange-200">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;