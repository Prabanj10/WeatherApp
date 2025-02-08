import { useSelector } from 'react-redux';
import styles from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  const error = useSelector((state) => state.weather.error);
  if (!error) return null;

  return (
    <div>
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default ErrorMessage;
