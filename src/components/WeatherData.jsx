import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { weatherInfo, errorHandle } from '../redux/weatherSlice';
import { useEffect } from 'react';
import styles from './WeatherData.module.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherData = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.weather.query);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;
  const weatherData = useSelector((state) => state.weather.data);

  useEffect(() => {
    const fetchWeather = () => {
      try {
        axios
          .get(url)
          .then(function (response) {
            console.log(response.data);
            dispatch(weatherInfo(response.data));
          })
          .catch(function (error) {
            if (error.status === 404) {
              dispatch(
                errorHandle('City not found! Please check your spelling.')
              );
              return;
            }
            dispatch(errorHandle(error.message));
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
    const interval = setInterval(fetchWeather, 30000);

    return () => clearInterval(interval);
  }, [query, dispatch, url]);

  return (
    <div>
      {weatherData && (
        <div className={styles.weatherContainer}>
          <div className={styles.weather}>
            <img
              className={styles.weatherIcon}
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="weather icon"
            />
            <h1 className={styles.temperature}>{weatherData.main.temp}°C</h1>
          </div>
          <h1 className={styles.weatherTitle}>{weatherData.weather[0].main}</h1>
          <h1>Humidity {weatherData.main.humidity}%</h1>
          <h1>Wind {weatherData.wind.speed}km/h</h1>
        </div>
      )}
    </div>
  );
};

export default WeatherData;
