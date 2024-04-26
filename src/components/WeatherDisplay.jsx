
import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div >
      {weather.loading && <p>Loading...</p>}
      {weather.error && <p>{weather.error}</p>}
      {weather.data && (
        <div className="weather-display">
          <h2>{weather.data.name}</h2>
          <p>Temperature: {weather.data.main.temp}°C</p>
          <p>Humidity: {weather.data.main.humidity}%</p>
          <p>Wind Speed: {weather.data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
