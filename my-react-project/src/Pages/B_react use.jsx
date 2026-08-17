import { useState } from "react";

export default function B_reactUse() {

    const [product, setProduct] = useState("chocalate")
    const [qty, setQty] = useState(1)
    const [price, setprice] = useState(10)


    return (

        <>
            <div>
                <h1> Order Details </h1>

            </div>

            <div>
                <button onClick={() => setQty(qty > 0 ? qty - 1 : 0)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}> + </button>
            </div>

            <div>
                <h4>
                    total price : {qty * price}
                </h4>
            </div>
        </>
    )
}

