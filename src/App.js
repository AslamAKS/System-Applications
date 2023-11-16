import './App.css';
import Calculator from './Components/Calculator/Calculator';
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
import WeatherOpen from './Components/WeatherOpen/WeatherOpen';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/weather' element={<WeatherOpen/>}/>
      </Routes>
    </div>
  );
}

export default App;
