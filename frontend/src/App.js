import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <h1>DVD Rental</h1>
      <Register />
      <Login />
      <MoviesList />
    </div>
  );
}

export default App;
