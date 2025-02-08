import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput, weatherInfo } from '../redux/weatherSlice';

const Search = () => {
  const [input, setInput] = useState();

  const query = useSelector((state) => state.weather.query);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchInput(input));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
