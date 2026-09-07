import { useState } from "react";
import A2_child from "./A2_child";

export default function Aprops (){
    const [studentname,setstudentName] = useState("sudhan");
    const [studentmobile,setstudentMobile] = useState(9843506737)
    
    const [studentaddress,setstudentaddress] = useState(
        {
            temp: {
                no:2/17,
                street : kuravappulam,
                area: nagapatinam,
            },
            permanent:{
                  no:33,
                street : velachery,
                area: cheenai,
            }
        }
    );
    return(
        <>
          <div>
            <h3>props concepts</h3>
            <A2_child
            name = {studentname}
            phone = {studentmobile}
            address = {studentaddress}
            />
          </div>
        </>
    )
}