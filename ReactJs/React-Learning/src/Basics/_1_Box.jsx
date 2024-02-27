import React from 'react'

function Box(props) {
  const {children} = props
  return (
    <div>
        <div className ={ `w-${props.width} h-${props.height} shadow-md rounded-lg bg-${props.color} p-1`}>
          {children}
        </div>
    </div>
  )
}

export default Box