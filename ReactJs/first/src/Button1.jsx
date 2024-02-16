import React from 'react'

function Button1({a, b}) {
  
  return (
    <div>
      <h1>{a}</h1>
      <button onClick = {()=>b(a+1)} className="px-3 py-1 text-blue-900 bg-white rounded-md text-xs">Button1</button>
    </div>
  )
}

export default Button1