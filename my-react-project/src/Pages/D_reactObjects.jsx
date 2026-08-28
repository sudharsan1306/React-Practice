import { useState } from "react";

export default function D_reactObject(){

    const [cadidate,setCandidate] = useState(
        {
            name: "Sudharsan",
            age : 22,
            designation : "student",
            address : "2/14, vedaraniyam, nagapatinam",
        }
    )

    return(
        <>
          <div>
            <h1>candidate Details</h1>
          </div>
          <div>
            <p>candidate Name : {cadidate.name}</p>
            <p>candidate age : {cadidate.age}</p>
            <p>candidate designation : {cadidate.designation}</p>
            <button onClick={ () => setCandidate({...cadidate,name :"sudhan"})}>new Name</button>
            {/* ... -->When updating one property of an object stored in React state */}

            <button onClick = { () => setCandidate({...cadidate, name : "Sudharsan"})}>old name</button>
          </div>
        </>
    )
}