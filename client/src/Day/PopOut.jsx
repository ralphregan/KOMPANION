export default function PopUp({openPopUp,closePopUp, setCreateJournal, setCreateNote, setHideForm}) {
    

    const handlelosePopUp = (e) => {
        if (e.target.id === 'ModelContainer') {
          closePopUp((prev)=> !prev);
        }
      }
if(openPopUp !== true) return null
    return(
        <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-50 backdrop-blur-sm '>
      <div 
        className='p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='w-full p-3 grid gap-5  '>
            <span>
            <p>Would you like to post a Note </p>
          <button onClick={()=> { setCreateNote((prev)=>!prev); setHideForm(true);setCreateJournal(false) ;closePopUp((prev)=> !prev) } } className="rounded-full w-32 h-10 bg-cyan-500 shadow-lg font-semibold hover:scale-125 transition-transform text-white hover:text-black  duration-300 ease-in-out hover:bg-cyan-400  hover:shadow-xl ">Create Note</button>
            </span>
            <span>
<p>Would you like to create a journal </p>
          <button  onClick={()=>{setCreateJournal((prev)=>!prev);setCreateNote(false) ;setHideForm(true); closePopUp((prev)=> !prev) }} className="rounded-full w-32 h-10 bg-orange-500 font-semibold text-white shadow-lg hover:scale-125 transition-transform  duration-300 ease-in-out  hover:shadow-xl  hover:bg-orange-400 hover:text-black  ">Create Journal</button>
            </span>
        </div>
      </div>
    </div>
    )
}