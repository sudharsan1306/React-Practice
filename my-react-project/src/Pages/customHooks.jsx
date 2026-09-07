import { useState } from 'react'
import { useLanguage } from '../core/custom'

export default function CustomHooks(){

   const[lang,setLang] = useState("eng")
const content = useLanguage(lang)
//console.log(useLanguage)

    return(
        <>
          <div>
            <h3>candidate details</h3>
          </div>

          <select onChange ={(e)=>setLang(e.target.value)} >
              <option value="eng" >English</option>
               <option value="tam">Tamil</option>
          </select>
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