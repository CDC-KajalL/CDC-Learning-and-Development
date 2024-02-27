import { useState } from 'react'

function Second() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Cocoa powdered cake"
        },
        {
            id: 2,
            checked: false,
            item: "Jelly with stawberries overflooded"
        },
        {
            id: 3,
            checked: true,
            item: "Blueberries aesthetic custard"
        }
    ])
    return (
        <div>
            <ul>
                {items.map((item) => {
                    <li className="item" key={items.id}>
                        <input type="checkbox" checked={items.checked} />
                        <label>{items.item}</label>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Second