import React from "react";

function Navbar() {
	return (
		<nav className="bg-white p-4 fixed top-0 w-full z-10">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="text-purple-700 hover:text-purple-600 font-bold text-xl">
						Bhaktivedanta Library
					</div>
					<div className=" font-bold hidden md:flex space-x-4">
						<a href="#" className="text-purple-700 hover:text-purple-600">
							Home
						</a>
						<a href="#" className="text-purple-700 hover:text-purple-600">
							About
						</a>
						<a href="#" className="text-purple-700 hover:text-purple-600">
							Services
						</a>
						<a href="#" className="text-white hover:text-orange-200">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
