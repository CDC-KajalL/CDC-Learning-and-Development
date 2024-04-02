import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function Rating(props) {
    return (
        <div className="flex flex-row items-center">
            <h1 className="mr-2">Rating: {props.rating}</h1>
            {[...Array(5)].map((_, index) => (
                <span key={index}>
                    {index < props.rating ? (
                        <IoIosStar className="text-orange-500" />
                    ) : (
                        <IoIosStarOutline className="text-orange-500" />
                    )}
                </span>
            ))}
        </div>
    );
}

export default Rating;
