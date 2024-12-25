import axios from "axios";
import { useEffect } from "react";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";
export default function SendData({ userLocation, setWeatherData, setIsError, formData }) {
const [weda, setWeda] = useLocalStorageState(null,'WeatherResult')




  useEffect(() => {
const controller = new AbortController()
console.log(userLocation)
    async function Send() {
      if (!userLocation) {
        setIsError("Something went wrong with fetching your location");

        try {
          if(!formData) {
            console.log('Form Data is not updated yet')
            setIsError("please Provide location data")
            return
          }
          const { location } = formData;
          console.log(formData)
          const response = await axios.post("/city", { location: location },{signal: controller.signal});
          const result = await response.data;
          console.log("server response:", result.content);

          setWeatherData(result);
          if(result)localStorage.setItem("result", JSON.stringify(result))
        } catch (error) {}
      }
      else if(userLocation) try {
        const { latitude, longitude } = userLocation;

        const response = await axios.post("/weather", {
          latitude: latitude,
          longitude: longitude,
        },{signal: controller.signal});
        const result = await response.data;
        console.log("server response:", result.content);

        setWeatherData(result);
        if(result) setWeda(result)
      } catch (error) {
        console.log("Error sending Data:", error);
        setIsError(error.message);
      }
    }
    Send();
    return function () {
      controller.abort()
    }
  }, [userLocation, setWeatherData, setIsError, formData,setWeda]);
}
