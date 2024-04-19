import React from 'react'
import CustomCard from './_8_Custom_Card'
import { useParams } from "react-router-dom";

function CardDetails({book}) {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center">
      {book
            .filter((item) => item.id === id)
            .map((item, index) => (
              <div className="card-info" key={index}>
                <CustomCard Src = {item.image} content = {item.description} rating = {item.rating} title = {item.title} author = {item.author}/>
              </div>
            ))}
    </div>
  )
}

export default CardDetails