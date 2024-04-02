import React from 'react'

function Box(props) {
  const {children} = props
  return (
    <div>
        <div className ={ `w-${props.width} h-${props.height} shadow-md rounded-lg bg-${props.color} p-1`}>
          {children} {/* children is used to render any content that is passed between the opening and closing tags of the Box component.*/}
        </div>
    </div>
  )
}

export default Box