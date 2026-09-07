import Tamil from '../json/tamil.json'
import english from '../json/eng.json'
import { useEffect, useState } from 'react';
import axios from 'axios'


export const useLanguage = (code) => {

    switch (code) {

        case "tam":
            return Tamil;

        case "eng":
            return english;

        default:
            return english;
    }




}

export const useFetch = (url) =>{

    const[load,setLoad] =useState(true)
    const[error,setError]= useState(false)
    const[data,setData] = useState([])


    useEffect(()=>{

             apiCall(url)
    },[url])

    const apiCall = async (url) =>{

        try{
            let response = await axios.get(url)
            response && setData(response.data)
            setLoad(false)
        }
        catch(e){
            setError(true)
        }
    }

    return{
        loadName : load,
        errorName : error,
        dataName : data
    }
}

