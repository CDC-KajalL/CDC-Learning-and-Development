import React from 'react'

function Box(props) {
  const {children} = props
  return (
    <div>
        <div className = "w-52 h-52 shadow-md rounded-lg bg-red-300 p-1">
          {children}
        </div>
    </div>
  )
}

export default Box