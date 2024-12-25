import { useState } from "react";
import Form from "./Form";

export default function Location( {userLocation,isError, setUserLocation, setFormData, formData}  ) {
  

  const [LocationDenied, setLocationDenied] = useState()

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setUserLocation(false);
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        setLocationDenied(true);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };
  return <div className="bg-orange-100 w-72 h-80 grid justify-center content-center  " >

  {!userLocation && !LocationDenied ? (
    <button className="rounded-xl bg-slate-100 text-zinc-900 font-extrabold shadow-lg hover:scale-110 transition duration-300 ease-out   w-24" onClick={getUserLocation}>Check weather</button>
  ) : (
    <div className="flex flex-col justify-normal items-center content-center text-center gap-4" >
      <h1 >{isError} Please kindly enter your</h1>
  <Form setFormData={setFormData}  />
    </div>
  )}
  </div>
}
