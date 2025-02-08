import './App.css'
import ErrorMessage from './components/ErrorMessage'
import Search from './components/Search'
import WeatherData from './components/WeatherData'

const App = () => {
  return (
    <div className="a">
    <div className='app'></div>
    <Search className='search' />
    <WeatherData/>
    <ErrorMessage/>
    </div>
  )
}

export default App