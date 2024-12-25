import { useState } from "react"

export default function Wears({children, types}) {
    const [isOpen, setIsOpen] = useState(false)
return(
<div className="grid gap-4 mt-7 justify-normal rounded-t-md ml-3 rounded-b-2xl items-center text-slate-900 font-semibold bg-fuchsia-500 bg-opacity-20 shadow-2xl w-96 p-5">
    <span className={ `flex justify-around ${isOpen ?'text-base':'text-lg'   } `} > {types} <button onClick={()=>setIsOpen(!isOpen) } className="text-sm bg-lime-50 bg-opacity-80 hover:scale-110 transition duration-300 ease-out w-20 rounded-b-2xl text-amber-700 rounded-t-md" >{isOpen?  'Close':'Open' } </button> </span>

    <p> {isOpen &&  children} </p>
</div>

)

}