import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useKey } from "./CustomHooks/useKey"

export default function Form({setFormData, formData} ) {
    const [updateData, setUpdateData] = useState("")
    

const inputEl = useRef(null)

useKey( 'Enter', ()=>{
    if(inputEl.current) inputEl.current.focus()})



function handleSubmit(e) {
    e.preventDefault()
    setFormData({location: updateData})
    console.log(updateData)
}
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-normal content-center text-center" >

            <input ref={inputEl}  value={updateData} onChange={(e)=> setUpdateData(e.target.value)} type="text" placeholder="Location | e.g London" />
            <button  className="rounded-xl bg-slate-100 text-zinc-900 font-semibold shadow-lg hover:scale-110 transition duration-300 ease-out   w-24" >Enter</button>
        </form>
            

     


    )



}