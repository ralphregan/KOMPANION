import { Link } from "react-router-dom";
import Wears from "./WearsComp";
import { Data } from "./WEARSDATA";
export default function WeekCalender() {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let today = new Date();
  let month = today.getMonth() + 1;
  let days = new Date(month, today.getFullYear(), 0).getDate();
  let dayOfWeek = daysOfWeek[(today.getDay() )% 7];
  // let currentDate = today.getDate();



  return (
    <div>
      <div className="grid-cols-1">
        <div className="flex gap-2 h-14 justify-normal shadow-2xl rounded-t-md ml-3 rounded-b-2xl items-center bg-opacity-50 bg-lime-200 w-96 p-5 ">
          {Array.from({ length: 7 }, (_, index) => (
            <Link
              className={`hover:scale-125 transition duration-300 ease-out  w-14 font-bold text-center ${
                dayOfWeek === daysOfWeek[index]
                  ? "text-amber-700"
                  : "text-slate-800"
              }`}
              key={index}
            >
              {" "}
              {dayOfWeek === daysOfWeek[index]
                ? "Today"
                : daysOfWeek[index]}{" "}
            </Link>
          ))}
        </div>
{Data.map( (data, index)=> <Wears types={data.type} key={index} > {data.desc} </Wears> )}
        {/* <Wears types="WORK/OUTDOOR WORK">
          {" "}
          As temperatures drop into the single digits, forget your lightweight
          tops; instead, pack in thicker sweaters, jumpers, and turtlenecks to
          keep you extra warm underneath your coat. Choosing the right fabrics
          (like knits, cashmere, wool) is also as important as what you layer.
          For extra warmth, we recommend wearing your thermal underwear beneath
          to keep you extra toasty.{" "}
        </Wears>
        <Wears types="OUTDOORS WORKOUT">
          {" "}
          Since your body temperature will rise during your run, it's crucial to
          prioritize warmth and comfort while staying mobile, opt for moisture-wicking base
          layers, thermal long-sleeve tops, and running jackets designed for
          colder weather. Look for fabrics like merino wool or technical
          polyester blends that keep sweat away from your skin while retaining
          heat. Layering is key: start with a fitted base layer, add an
          insulating mid-layer, and top it off with a windproof or
          water-resistant jacket. For extra protection,
          wear thermal running tights or leggings, and don’t forget gloves, a thermal hat, a neck gaiter to shield your
          extremities from the chill. If conditions are icy or wet, choose
          running shoes with good traction or invest in grippers for added
          stability.{" "}
        </Wears>
        <Wears types="FOR CASUAL OUTING">
          {" "}
          When it’s super cold, wear a thermal or long-sleeve shirt under a warm
          sweater or hoodie. Add a thick coat like a puffer or wool jacket to
          stay cozy. Wear jeans or thick pants, and if it’s really cold, put on
          leggings underneath. Don’t forget a hat, scarf, gloves, and warm socks
          with boots to keep your feet toasty! Choose soft, warm fabrics like
          fleece or wool to stay comfy all day..{" "}
        </Wears> */}
      </div>
    </div>
  );
}
