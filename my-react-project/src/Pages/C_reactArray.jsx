import { useState } from "react";


export default function C_reactArray() {

    const [actors, setActors] = useState(["vijay", "ajith", "suriya", "karthi", "yash",])

    return (
        <>
            <div>
                <h1> flim actors</h1>
            </div>

            <div>
                {actors.map((value,index) => <p>{ value}</p>)}
            </div>
        </>
    )
}
