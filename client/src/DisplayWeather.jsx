export default function ShowWeather({weatherData, fromBGColor  ,toBGColor, fontColor  }) {
    const weatherDatas = {
    content :    {
            temp: 1,
            feels: -2,
            humidity: 90,
            location: 'Dortmund',
            locationC: 'DE',
            wind: 3,
            icon: 'https://openweathermap.org/img/wn/13n@2x.png',
            desc: 'light snow'
          }
    }

    if(!weatherData) return null
   console.log(weatherData)


return(
     
<div className={`shadow-lg bg-gradient-to-br ${fromBGColor ? fromBGColor : 'from-lime-300' } ${toBGColor? toBGColor : 'to-fuchsia-500'} opacity-75 w-80 h-auto grid justify-center rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl ease-out`}>
  <div className="font-bold text-orange-600 text-2xl pt-4">
    <h3>{weatherData?.content?.location}</h3>
  </div>
  <div>
    <div className="relative w-full ">
<img src= {weatherData?.content?.icon} alt="weather icon" className="w-full h-auto "/>
    <h1 className="absolute inset-0 font-extrabold text-orange-800 text-9xl font-cursive hover:scale-125 transition duration-300 ease-in-out">
      {weatherData?.content?.temp}°
    </h1>
    </div>

    <span className="font-semibold text-orange-500 text-lg">
      {weatherData?.content?.desc}
    </span>
  </div>
  <div className="text-2xl font-semibold text-orange-700 text-opacity-85 flex justify-around mt-4 gap-x-4 ">
    <span className="flex flex-col items-center">
      {weatherData?.content?.feels}
      <p className="text-orange-600 font-medium text-sm">Feels</p>
    </span>
    <span className="flex flex-col items-center">
      {weatherData?.content?.humidity}
      <p className="text-orange-600 font-medium text-sm">Humidity</p>
    </span>
    <span className="flex flex-col items-center">
      {weatherData?.content?.wind}
      <p className="text-orange-600 font-medium text-sm">Wind</p>
    </span>
  </div>
</div>



)


}