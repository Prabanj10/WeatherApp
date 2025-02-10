import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { weatherInfo, errorHandle } from '../redux/weatherSlice';
import { useEffect, useState } from 'react';
import styles from './WeatherForecast.module.css';
const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherForecast = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.weather.query);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`;
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(url);
        const dailyForecast = response.data.list
          .filter((entry) => entry.dt_txt.includes('12:00:00'))
          .slice(1);
        setForecast(dailyForecast); // Next 7 days
      } catch (error) {
        console.error('Error fetching forecast:', error);
      }
    };

    fetchForecast();
  }, [query]);

  return (
    <div className={styles.forecast}>
      <h2 className={styles.heading}>Next 4 Days</h2>
      <div className={styles.forecastContainer}>
        {forecast.map((day, index) => (
          <div
            key={index}
            className={styles.weatherContainer}>
            <p className={styles.date}>{day.dt_txt.replace('12:00:00', '')}</p>
            <img
              className={styles.weatherIcon}
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather icon"
            />
            <p className={styles.temperature}>{day.main.temp.toFixed(1)}°C</p>
            <p className={styles.weather}>{day.weather[0].main}</p>
            <div className={styles.remainingData}>
              <p className={styles.otherData}>Humidity {day.main.humidity} %</p>
              <p className={styles.otherData}>Wind {day.wind.speed} km/h</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
