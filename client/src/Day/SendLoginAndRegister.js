import { useEffect, useRef} from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios"

export default function SendRegister({Data, dispatch, hasSent}) {
 const navigate = useNavigate()
    const initialMount = useRef(true)

useEffect(function() {
if(initialMount.current){
    initialMount.current= false 
    return
}

if(!Data || hasSent) {
   
    return
}

const controller = new AbortController()
async function send() {
    const api = Data.login ? '/Login' : '/Register'
    console.log(Data)
    try {
        console.log("started")
            dispatch({type: "SEND_START"})
    const response = await axios.post(api, Data)
    const result = response.data 
    console.log(result)
    dispatch({ type: "SEND_SUCCESS", payload: result });
    if(Data.login) navigate("/day")
} catch (error) {
    console.log("there is an err", error)
 
    dispatch({ type: "SEND_FAILURE", payload: error.message })
}
finally{
    if (!controller.signal.aborted) {
        dispatch({ type: "RESET" });
    }
}
}
send()
return ()=> controller.abort()
},[Data,hasSent, dispatch, navigate])
}