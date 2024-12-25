import axios from "axios"
import { useEffect } from "react";
export default function JournalAndNote({children, FormData}) {
    
useEffect(()=>{

    async function send(){
       if(!FormData) return null

        try {  
            console.log(FormData.note)
            const url = FormData.note ? "/note" : "/journal";   
            const response = await axios.post(url, FormData)
            const result =  response.data
            console.log(result)
        } catch (error) {
            console.log(error)
            
        }

    }  
     send()




},[FormData]  )


}