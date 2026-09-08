import { useReducer } from "react"
import { useLanguage } from "../core/custom"

export default function Reducer(){

const[lang,dispatch] = useReducer(useLanguage,"eng")


    return(
        <>
        <div>
            <h3>cadidate details</h3>
        </div>
        <div>
            <select onChange={() => dispatch (e.target.value)} >
                <option value="eng">English</option>
                <option value="tam">Tamil</option>
            </select>
        </div>
        <div>
            <h3>{content.Name}</h3>
            <p>{content.Degree}</p>
            <p>{content["Current Course"]}</p>
            <p>{content.email}</p>
            <p>{content["mobile no"]}</p>
        </div>
        
        
        </>
    )
}