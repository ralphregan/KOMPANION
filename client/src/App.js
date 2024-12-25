import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import SendData from "./SendDataServer";
import ShowWeather from "./DisplayWeather";
import Header from "./Header";
import Accessories from "./Accessories";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";

export default function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [isError, setIsError] = useState("");
  const [formData, setFormData] = useState({ location: "" });
  const [selectedDate, setSelectedDate] = useState(null);


  const stordData = localStorage.getItem("WeatherResult");
  const parseStoredData =
    stordData && stordData.trim() !== "" ? JSON.parse(stordData) : null;
  console.log(weatherData);

  function handleLocalStorageReset() {
    localStorage.removeItem("WeatherResult");
    setWeatherData({});
  }
  const isWeatherDataEmpty = Object.keys(weatherData).length === 0;
  console.log(isWeatherDataEmpty);
  return (
    <div className="bg-gradient-to-t from-teal-50 to-red-100 m-0 h-screen">
      <Header />

      <div className="flex justify-around">
        {parseStoredData ? (
          <div className="grid gap-3 justify-normal content-center items-center text-center align-middle ">
            <button
              onClick={handleLocalStorageReset}
              className="relative px-6 py-3 animate-glow text-center w-40 h-14 rounded-full bg-orange-400  text-white font-extrabold"
            >
              REFRESH{" "}
            </button>
            <ShowWeather
              weatherData={parseStoredData}
              fromBGColor="from-sky-300"
              toBGColor="to-orange-200"
            />
            <Accessories />
          </div>
        ) : isWeatherDataEmpty ? (
          <div>
            <Location
              userLocation={userLocation}
              setUserLocation={setUserLocation}
              isError={isError}
              setFormData={setFormData}
              formData={formData}
            />
          </div>
        ) : (
          <div className="grid gap-3 ">
            <ShowWeather
              weatherData={weatherData}
              fromBGColor="from-sky-300"
              toBGColor="to-orange-200"
            />

            <Accessories />
          </div>
        )}

        <Calendar setSelectedDate={setSelectedDate} />
      </div>
      <SendData
        userLocation={userLocation}
        setWeatherData={setWeatherData}
        setIsError={setIsError}
        formData={formData}
      />
    </div>
  );
}
