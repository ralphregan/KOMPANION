import { useState } from "react";

export default function Calendar({setSelectedDate}) {
  // const options = {
  //   weekday: "short",
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // };

  let today = new Date();
  let month = today.getMonth() + 1;
  let days = new Date(month, today.getFullYear(), 0).getDate();

  let dateArray = Array.from({ length: days }, (_, i) => i + 1);
  let CurrentDate = today.getDate();
 
  let curentMonth = today.toLocaleString("default", {month: "long"})




  return (
   
        <div className="flex justify-center gap-1 " >
          <div className="text-center content-center " >
            <h1 className="writing-mode-vertical-rl text-white text-orientation-upright font-extrabold bg-orange-300 p-4 rounded-xl">MONTH</h1>
          </div>
        <div className="grid gap-2 grid-cols-7 w-72 h-96 p-3 font-bold bg-white opacity-85 place-items-center rounded-xl  hover:scale-105 transition duration-500 ease-out hover:shadow-2xl">
        
        
          {dateArray.map((each) => (
            <div
              onClick={() =>  setSelectedDate(each)}
              className={` hover:scale-125 transition duration-300 ease-out rounded-lg text-center border-2 w-8 m-2 cursor-pointer ${
                each === CurrentDate
                  ? "bg-orange-500 font-extrabold hover:bg-orange-700 hover:text-white"
                  : "bg-orange-200 hover:bg-orange-300 hover:text-white"
              } `}
              key={each}
            >
              {" "}
              {each}{" "}
            </div>
          ))}
          <br />
          <h1 className="text-orange-400" > {curentMonth} </h1>
        </div>
        </div>
    );
}

export function Week() {
  
}