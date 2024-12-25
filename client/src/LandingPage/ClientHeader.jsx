function ClientHeader({onclick, darkMode, dispatch}) {
  return (
    <div className="container mx-auto px-4 pt-10 pb-16" >
      
<div className="container flex justify-between ">
      <button onClick={onclick} type="button" className={` ${darkMode ? "bg-white text-slate-950" : "bg-zinc-950 text-white" } font-bold p-2 rounded-2xl w-auto hover:scale-110 duration-300 ease-in-out`} > Dark Mode </button>
<div className="flex gap-2">
  <button onClick={()=> dispatch({type: "register"})} className={` ${darkMode ? "bg-white text-slate-950" : "bg-zinc-950 text-white" } font-bold p-2 rounded-xl w-auto hover:scale-110 duration-300 ease-in-out`} >Join us </button>
  <button onClick={()=> dispatch({type: "login"})} className={` ${darkMode ? "bg-white text-slate-950" : "bg-zinc-950 text-white" } font-bold p-2 rounded-xl w-auto hover:scale-110 duration-300 ease-in-out`} > Login</button>
</div>
</div>
     
      <h1 className={`${darkMode && "text-white"} text-5xl font-bold text-center mb-6`}>Your All-in-One Digital Companion</h1>
      <p className={`${darkMode ? "text-white"  : "text-gray-600 "} text-xl text-center mb-12 max-w-2xl mx-auto`}>
        Weather updates, calendar management, note and journal tasking, and
        article readind - all in one seamless experience
      </p>
      <div className="flex justify-center gap-4">
        <button onClick={()=> dispatch({type: "register"})} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Learn More</button>
      </div>
    </div>
  );
}

export default ClientHeader;
