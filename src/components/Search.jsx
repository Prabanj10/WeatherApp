import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput, weatherInfo } from '../redux/weatherSlice';
import styles from './Search.module.css'

const Search = () => {
  const [input, setInput] = useState();

  const query = useSelector((state) => state.weather.query);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchInput(input));
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter city name ...'
          className={styles.searchInput}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </div>
  );
};

export default Search;
