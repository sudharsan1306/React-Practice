import { useState } from 'react'
import custom from '../core'

export default function CustomHooks(){

const[lang,setLang]= usestate()
const content = useLanguage(lang)


    return(
        <>
          <div>
            <h3>candidate details</h3>
          </div>

          <select >
              <option value="eng">English</option>
               <option value="tam">Tamil</option>
          </select>
          <div>
             
          </div>
        </>
    )
}