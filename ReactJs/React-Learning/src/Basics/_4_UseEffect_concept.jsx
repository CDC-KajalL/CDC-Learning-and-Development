import React from 'react'
import { useState, useEffect } from "react";
import Btn from './_1_Button';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState("Variable");
    useEffect(() => {
    	console.log(`${product} will rule the world!`);
    });
    return (
        <div>
        Current {product}'s count: {count}
            <div>
                <Btn size="sm" type="basic" onClick={() => setCount(count + 1)}>Add to cart</Btn>
                <Btn size="sm" type="delete" onClick={() => setCount(count - 1)}>Remove from cart</Btn>
                Change Product Name:{" "}
                <input type="text" onChange={(e) => setProduct(e.target.value)} />
            </div>
        </div>
    );
}

export default UseEffect