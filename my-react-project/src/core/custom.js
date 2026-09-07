import Tamil from '../json/tamil.json'
import english from '../json/eng.json'

export const useLanguage = (code) =>{

    switch (code){

        case "tam":
        return Tamil;

        case "eng":
            return english;

            default:
                 "choose language";
    }


    

}