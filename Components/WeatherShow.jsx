import React from 'react'

const WeatherShow = ({ weather, error }) => {
    return (
        <>
            {weather &&
                <div class="d-flex justify-content-center mt-4">
                    <div class="card border-success mb-3" style={{ maxWidth: "28rem" }}>
                        <div class="card-header bg-transparent border-success">Current Weather</div>
                        <span className='card-body'> {weather.location.localtime.split(' ')[1]}</span>
                        <div class="card-body text-success">
                            <img src={weather.current.condition.icon} alt="Weather Icon" width="50" height="50" class="me-3" />
                            <span className='card-text feelslike'>Feels like {weather.current.feelslike_c}°C</span>
                            <h5 class="card-title">{weather?.location?.name}</h5>
                            <p class="card-text">The sky will be {weather.current.condition.text}.Humidity is {weather.current.humidity}</p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <p class="card-text">Humidity : {weather.current.humidity}</p>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}

export default WeatherShow