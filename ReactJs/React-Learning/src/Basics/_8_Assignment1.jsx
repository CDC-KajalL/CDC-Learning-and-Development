import React from "react";
import img10 from "../assets/RADHAKRISHNA.jpg";
import img11 from "../assets/design.svg";
import img12 from "../assets/welcome.jpg";
import Card from "./_8_Card";
import Navbar from "./_8_Navbar";

function Assignment1() {
	return (
		<div className=" w-full justify-center items-center">
			<div className="relative mb-[20px]">
				<Navbar />
			</div>
			<div className="flex flex-row bg-gradient-to-r from-orange-300 via-orange-400 to-pink-500 py-16 text-white">
				{/* left box */}
				<div className="w-[50%] p-10 flex flex-col justify-center items-center">
					<div className="p-6 text-white font-poppins">
						<h1 className="text-4xl font-bold mb-2">
							The Topmost Source Of Spiritual Knowledge
						</h1>
						<p className="w-[500px] font-semibold text-xl mt-5">
							Bhaktivedanta Library is a free, online multilingual research tool
							designed primarily to explore the teachings of His Divine Grace{" "}
							<br /> A C. Bhaktivedanta Swami Prabhupada.
						</p>

						{/* button */}
						<div className="mt-5">
							<a
								href="#_"
								className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
								<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
								<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
								<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
								<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
								<span className="relative">Get Started</span>
							</a>
						</div>
					</div>
				</div>

				{/* right box */}
				<div className="p-5 flex flex-col w-[50%]">
					<br />
					<div className="flex flex-row">
						<img
							src={img10}
							className="w-[300px] h-[350px] rounded-lg shadow-xl"
						/>
						<p className="ml-5 text-[20px] font-bold font-poppins text-white">
							<ol>
								No Depression, No Drama Only!!!
								<hr className="mb-2" />
								<li>Hare Krishna</li>
								<li>Hare Krishna</li>
								<li>Krishna Krishna Hare Hare</li>
								<li>Hare Rama</li>
								<li>Hare Rama</li>
								<li>Rama Rama Hare Hare</li>
							</ol>
						</p>
					</div>
				</div>
			</div>

			{/* About Author */}
			<div className="bg-gradient-to-l from-orange-300 via-orange-400 to-pink-500 text-white font-semibold">
				<div className="flex flex-row p-5">
					<div className="w-[50%] text-center flex flex-col justify-center items-center">
						<img src={img12} className="w-[500px] rounded-xl shadow-2xl" />
						<p className="text-xl">A. C. Bhaktivedanta Swami Prabhupada</p>
					</div>
					<div className="w-[50%] flex flex-col justify-center items-start">
						<p className="w-[600px] text-xl text-left">
							Srila Prabhupada, born Abhay Charan De, was a renowned spiritual
							teacher and the founder-acharya of the International Society for
							Krishna Consciousness (ISKCON), also known as the Hare Krishna
							movement. He dedicated his life to spreading the teachings of
							Bhagavad Gita and the practice of bhakti yoga worldwide.
							Prabhupada traveled extensively, delivering lectures, writing
							books, and establishing temples and ashrams around the globe. His
							profound wisdom, compassion, and devotion continue to inspire
							millions of people to lead a life of spiritual growth and service.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<img src={img11} className="w-[300px] object-cover" />
			</div>
			{/* Calling Card */}
			<Card />
		</div>
	);
}

export default Assignment1;
