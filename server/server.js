import express from "express";
import mongoose from "mongoose";
import pg from "pg";

import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "YourCompanion",
  password: "reganralph",
  port: 5432,
});
db.connect();
const uri = "mongodb://127.0.0.1:27017";
mongoose.connect(`${uri}/weatherapp`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersWeather = new mongoose.Schema({
  temp: Number,
  feels: Number,
  humidity: Number,
  location: String,
  locationC: String,
  wind: Number,
  icon: String,
  desc: String,
});
const userNote = new mongoose.Schema({
  user: { email: String, password: String, username: String, age: Number },
  arthur: String,
  about: String,
  text: String,
});
let content;

const Weather = mongoose.model("Weather", usersWeather);
const Note = mongoose.model("Notes", userNote);

const App = express();
const port = 5000;
const Api = "https://api.openweathermap.org/data/2.5/weather?";
const openMateoAPI = "https://archive-api.open-meteo.com/v1/era5?";
const ApiKey =
  process.env.OPEN_WEATHER_API_KEY || "6c0afe19f864baed75521173dda75009";

App.use(cors());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.get("/api", (req, res) => {
  res.json({ users: ["hi", "trying"] });
});

App.post("/city", async (req, res) => {
  const location = req.body.location;
  if (!location) {
    return res.status(400).send({ error: "Location is required" });
  }

  try {
    const response = await axios.get(
      `${Api}q=${location}&appid=${ApiKey}&units=metric`
    );
    const data = response.data;

    content = {
      temp: Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      location: data.name,
      locationC: data.sys.country,
      wind: Math.round(data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      desc: data.weather[0].description,
    };

    const weatherRecord = new Weather(content);
    await weatherRecord.save();
    res.status(200).send({ content });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch weather data" });
  }
});

App.post("/weather", async (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(req.body);

  if (!latitude || !longitude) {
    return res
      .status(400)
      .send({ error: "Latitude and Longitude are required" });
  }

  try {
    const response = await axios.get(
      `${Api}lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`
    );
    const data = response.data;
    console.log(data);
    const content = {
      temp: Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      location: data.name,
      locationC: data.sys.country,
      wind: Math.round(data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      desc: data.weather[0].description,
    };

    // const weatherRecord = new Weather(content);
    // await weatherRecord.save();
    console.log(content);
    res.status(200).send({ content: content });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch weather data" });
  }
});

App.get("/pastWeatherData", async (req, res) => {
  const { longitude, latitude, start, end } = req.query;

  if (!longitude || !latitude || !start || !end) {
    return res.status(400).send({ error: "All query parameters are required" });
  }

  try {
    const request = await axios.get(
      `${openMateoAPI}latitude=${latitude}&longitude=${longitude}&start_date=${start}&end_date=${end}&daily=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const result = request.data;
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch past weather data" });
  }
});

App.post("/note", async (req, res) => {
  const Input = req.body;
  if (!Input) {
    return res.status(400).send({ error: "Invalid input" });
  }

  console.log(Input);
  res.status(200).send({ message: "Note received successfully", data: Input });
});


App.post("/Register", async(req, res)=>{
const data = req.body.register
const {user} = data
console.log(user)

try {
  const response = await db.query('INSERT INTO users (email, password) VALUES ($1, $2)  RETURNING *',[user.email, user.password] )
  console.log(response.rows)

  res.status(200).send({message: "Registration Approved", })
} catch (error) {
  res.status(400).send({message: "Registration failed"})
}

})
App.post("/Login", async(req, res)=>{
  const data = req.body.login
  const {user} = data

  try {
    const response = await db.query("SELECT * FROM users WHERE email = $1 AND password = $2" , [user.email, user.password])
    res.status(200).send({message: "Login Approved"})
  } catch (error) {
    res.status(400).send({message: "Lgoin failed"})
  }
})

App.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});