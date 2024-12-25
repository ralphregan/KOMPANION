import WeekCalender from "./WeekCalender";
import Header from "../Header";
import ShowWeather from "../DisplayWeather";

export default function App2(params) {


function storedWeatherData() {
  const localStoredData = localStorage.getItem("WeatherResult")
  if(localStoredData) return JSON.parse(localStoredData)
    else return null
}


  return (
    <div className="bg-gradient-to-t from-lime-50 to-fuchsia-200 m-0 h-screen">
      <Header />
      <div className="flex justify-evenly gap-2">
       {localStorage &&   <ShowWeather  weatherData ={storedWeatherData()} fromBGColor="from-lime-200" toBGColor="to-fuchsia-100" /> }
        <WeekCalender />
       
      </div>
    </div>
  );
}
