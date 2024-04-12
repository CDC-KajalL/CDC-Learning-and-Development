import React from 'react'
function Card({ image, desc, author, rating, id }) {
    return (
        <div className='h-48 w-full object-cover md:w-48 bg-white'>
            <div className='w-72 object-cover '>
                <img src={image} ></img>
            </div>
        </div>
    )
}

export default Card