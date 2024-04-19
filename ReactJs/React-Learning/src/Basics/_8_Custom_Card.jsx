import React from 'react'

function CustomCard(props) {
  return (
    <div>
      {/* Image */}
        <div>
          {/* <img src = {props.Src} /> */}
        </div>
        {/* Description */}
        <div>
          <p>{props.content}</p>
          <p>{props.title}</p>
          <p>{props.author}</p>
          <p>{props.rating}</p>
        </div>
    </div>
  )
}

export default CustomCard