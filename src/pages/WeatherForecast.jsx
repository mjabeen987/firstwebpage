import React, { useEffect, useState } from 'react';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const CITY = 'London'; // You can change the city

export default function WeatherForecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setForecast(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!forecast || forecast.cod !== "200") return <div>Forecast data not available.</div>;

  return (
    <div>
      <h2>5-Day Forecast for {CITY}</h2>
      <ul>
        {forecast.list.slice(0, 5).map((item, idx) => (
          <li key={idx}>
            {item.dt_txt}: {item.main.temp}°C, {item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
}
