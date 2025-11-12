import React, { useState } from 'react'

const SearchComponent = ({ city, setCity, error, setError, weather, setWeather }) => {


    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



    const fetchWeather = async (e) => {
        e.preventDefault();
        if (city.trim() === "") {
            setError("Please enter City");
            return;
        }

        setCity("");
        setError("");

        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`);

            if (!response.ok) {
                throw new Error("City not found..");
            }

            const data = await response.json();
            console.log(data)
            setWeather(data);

        }
        catch (err) {
            setError(err.message);
        }
    }

    return (

        <>
            <h3 className='text-center'>Weather App</h3>
            <form class="row g-3 d-flex justify-content-center align-items-center mt-5" onSubmit={fetchWeather}>
                <div class="col-auto">
                    <input type="text" class="form-control" id="inputSearch" value={city} placeholder="Enter City..." onChange={(e) => { setCity(e.target.value) }} />
                </div>
                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary btn-sm">Search</button>
                </div>
            </form>
            <div className="col-12 text-center">
                {error && <div className="text-danger mt-2">{error}</div>}
            </div>

        </>
    )
}

export default SearchComponent