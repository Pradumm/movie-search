import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Movie from './component/Movie';
// import WeatherApp from './component/weather/WeatherApp';
// import SingleMovie from './component/SingleMovie';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        {/* <Route path='/Siglemovie/:id' element={<SingleMovie />} /> */}
        {/* <Route path='/WeatherApp' element={<WeatherApp />} /> */}

      </Routes>
    </>
  )
}

export default App;


 