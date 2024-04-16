import React from "react";
import { Shelf } from "./_8_Data";
import Rating from "./_5_Props";
import Btn from "./_1_Button";

const Card = () => {
	return (
		<div className=" w-full justify-center items-center">
			{/* map function */}
			<div className=" flex flex-row flex-wrap justify-center items-center gap-5">
				{Shelf.map((book) => (
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
								<Rating rating = {book.rating}/>
							</p>
						</div>
						{/* Readmore button */}
						<div>
							<Btn size="sm" type="primary" onClick = {()=>{alert(book.description)}}>Readmore</Btn>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
