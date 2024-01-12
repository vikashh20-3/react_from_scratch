import { useState } from "react";

const Contenttwo = () => {
    const [items, SetItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Item 1"
        },
        {
            id: 2,
            checked: true,
            item: "Item 2"
        },
        {
            id: 3,
            checked: true,
            item: "Item 3"
        }
    ]);


    return (
        <main>
            <ul>
                {
                    items.map((item)=>(
                         <li className="item">
                            <input type="checkbox" checked={items.checked} /> 
                            <label htmlFor="">{item.item}</label>
                            <button>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </main>
    )

}
export default Contenttwo;