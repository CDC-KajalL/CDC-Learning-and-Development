import React from "react";
import Navbar from "./_8_Navbar";

import img2 from "../assets/bhagvatam.svg";
import img3 from "../assets/bhagvatgeeta.svg";
import img4 from "../assets/chaitanya.svg";
import img5 from "../assets/p1.svg";
import img7 from "../assets/p3.svg";
import img8 from "../assets/p4.svg";
import img9 from "../assets/krishna.jpg";
import img10 from "../assets/RADHAKRISHNA.jpg";
import img11 from "../assets/design.svg";
import img12 from "../assets/welcome.jpg";

const Card = () => {
	const cardData = [
		{
			id: "1",
			title: "Bhagvatgeeta",
			author: "A. C. Bhaktivedanta Swami Prabhupada",
			rating: 5,
			description:
				"The largest-selling edition of the Gita all over the world, Bhagavad-Gita as It Is, is more than a book. Universally Bhagavad-Gita is renowned and truly claimed as the crown jewel of India?s spiritual wisdom. Spoken by Lord Krishna the Supreme Personality of Godhead to His intimate disciple Arjuna, the Gita’s seven hundred concise verses provides a definitive guide to the science of self realization. Complete wisdom with original sanskrit texts, word to word meaning, translation and purpot by His divine gracre A.C Bhakti Vedanta Swami Srila Prabhupada, Founder acharya of ISKCON",
			image: img3,
		},
		{
			id: "2",
			title: "Srimad Bhagvatam",
			author: "A. C. Bhaktivedanta Swami Prabhupada",
			rating: 5,
			description:
				"Srimad-Bhagavatam, an epic philosophical & literary classic. The timeless wisdom of India is expressed in the Vedas, ancient Sanskrit texts that touches upon all fields of human knowledge and provides illuminating answers, concerning everything from the nature of the self to the origin of the universe. Originally preserved through oral tradition, the Vedas were first put into writing by Srila Vyasadeva, the literary incarnation of God. Known as the ripened fruit of the tree of Vedic literature, Srimad-Bhagavatam is the most complete and authoritative exposition of Vedic knowledge.",
			image: img2,
		},
		{
			id: "3",
			title: "Civilization and Transdence",
			author: "A. C. Bhaktivedanta Swami Prabhupada",
			rating: 5,
			description:
				"Technology and science are good and have their place, but shouldn't distract us from our most important pursuit: to transcend this world and awaken our spiritual nature.",
			image: img5,
		},
		{
			id: "4",
			title: "Beyond Birth and Death",
			author: "A. C. Bhaktivedanta Swami Prabhupada",
			rating: 5,
			description:
				"Who are we? Why are we on this planet? What happens to us after death? Is there any life after death? These are some questions which all of us might have asked to ourselves or others at least once at one point of time in our life. Beyond Birth & Death by Srila Prabhupada presents startling evidence of the soul's incredible journey after death and explains the deep mysteries of reincarnation. This little, powerful book would provide you with extensive knowledge hidden deep in the pages of Vedic literature and one to break the cycle of repeated birth and death.",
			image: img7,
		},
		{
			id: "5",
			title: "Meditaion",
			author: "A. C. Bhaktivedanta Swami Prabhupada",
			rating: 5,
			description:
				"Meditation can resolve problems that previously evoked strong emotional and physiological reactions. Meditation refreshes, rejuvenates and repairs your life. Popular culture is inundated with various types of meditation, however, only meditating in a bona fide way produces the utmost benefit in your life. In this book, the greatest spiritual teacher of this time, His Divine Grace A. C. Bhaktivedanta Swami Prabhupada (1896-1977), shows you how to acquire the power of true meditation. He discusses authentic meditation techniques, which enable you to make a living connection with the original source of yourself and everything else- the Absolute Truth. Eternal knowledge, vigor and happines will manifest in your life through this connection. Open the book and take the key to your happiness today.",
			image: img8,
		},
		{
			id: "6",
			title: "The Teachings of Lord chaitanya: The Golden Avatar",
			author: "A. C. Bhaktivedanta Swami Prabhupada",
			rating: 5,
			description:
				"A Summary Study of Sri Chaitanya-charitamrita Taking the role of His own devotee, Lord Sri Krishna appeared as Sri Krishna Chaitanya about five centuries ago in Bengal, India, and began a great social and spiritual revolution that has profoundly affected the lives of millions worldwide. His conversations with the great scholars, kings, and mystics of the day form the basis of Teachings of Lord Chaitanya.",
			image: img4,
		},
	];

	return (
		<div className=" w-full justify-center items-center">
			{/* navbar */}
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
					<div className="text-center">
						<h2 className="font-bold text-2xl">Radhakrishna 🦚🪷</h2>
					</div>
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

			{/* card logic  */}
			<div className="mt-[20px] ">
				<div>
					<h1 className="font-bold text-center text-4xl mb-5">
						Available Books
					</h1>
				</div>

				{/* map function */}
				<div className=" flex flex-row flex-wrap justify-center items-center gap-5">
					{cardData.map((book) => (
						// each card logic
						<div
							key={book.id}
							className="w-[350px] h-[500px] p-5 bg-orange-100 rounded-md shadow-md shadow-red-100 hover:shadow-lg flex flex-col">
							{/* image design */}
							<div className="flex flex-col justify-center items-center mb-5">
								<img
									src={book.image}
									className="w-[200px] h-[250px] shadow-lg shadow-black rounded-md mb-2"
								/>

								{/* title */}
								<h2 className="font-semibold text-lg font-poppins mt-2 flex justify-start items-start">
									{book.title}
								</h2>
							</div>

							{/* author */}
							<h3>
								<span className="font-bold">Author: </span>
								{book.author}
							</h3>

							{/* description */}
							<p className="line-clamp-3">
								<span className="font-bold">Description: </span>
								{book.description}
							</p>

							{/* rating */}
							<div className=" mt-auto">
								<p>
									<span className="font-bold">Ratings: </span>
									{book.rating}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
