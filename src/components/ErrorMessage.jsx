import { useSelector } from "react-redux";

const ErrorMessage = () => {
  const error = useSelector((state)=>state.weather.error)
  console.log(error)
  if(!error) return null

  



  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorMessage