import './App.css'
import Search from './components/Search'
import WeatherData from './components/WeatherData'

const App = () => {
  return (
    <div className="a">
    <div className='app'></div>
    <Search className='search' />
    <WeatherData/>
    </div>
  )
}

export default App