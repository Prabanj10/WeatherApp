import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  const error = useSelector((state) => state.weather.error);
  if (!error) return null;

  return (
    <div>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
