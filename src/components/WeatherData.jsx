import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { weatherInfo, errorHandle } from '../redux/weatherSlice';
import { useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherData = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.weather.query);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
  const weatherData = useSelector((state) => state.weather.data);

  useEffect(() => {
    const FetchWeather = () => {
      try {
        axios
          .get(url)
          .then(function (response) {
            console.log(response);
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
    FetchWeather();
  }, [query, dispatch, url]);

  return (
    <div>
      <h1>{weatherData && weatherData.weather[0].main}</h1>
    </div>
  );
};

export default WeatherData;
