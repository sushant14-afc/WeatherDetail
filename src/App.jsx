import { useState } from 'react'
import './App.css'
import SearchComponent from '../Components/SearchComponent'
import WeatherShow from '../Components/WeatherShow'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <SearchComponent city={city} setCity={setCity} weather={weather} setWeather={setWeather} error={error} setError={setError} />
      <WeatherShow weather={weather} setWeather={setWeather} error={error} setError={setError}/>
    </>
  )
}

export default App
