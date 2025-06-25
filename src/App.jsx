import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WeatherToday from './pages/WeatherToday';
import WeatherForecast from './pages/WeatherForecast';
import TrainPage from './pages/TrainPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ margin: '1em' }}>
        <Link to="/">Today</Link> |{' '}
        <Link to="/forecast">Forecast</Link> |{' '}
        <Link to="/train">Train</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WeatherToday />} />
        <Route path="/forecast" element={<WeatherForecast />} />
        <Route path="/train" element={<TrainPage />} />
      </Routes>
    </Router>
  );
}

export default App;




