import React, { useState } from 'react'
import Button1 from './Button1'

function Box() {
    var [a, b] = useState(0)
    return (
        <>
            <div className="w-44 h-32 rounded-xl bg-red-600 p-3 text-white">
                <Button1 a={a} b = {b} />
            </div>
        </>
    )
}

export default Box