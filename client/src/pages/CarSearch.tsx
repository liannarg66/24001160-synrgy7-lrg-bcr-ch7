import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const CarSearch: React.FC = () => {
  const { state, dispatch } = useContext(CarContext);

  useEffect(() => {
    axios.get('http://localhost:3001/cars')
      .then(response => {
        dispatch({ type: 'SET_CARS', payload: response.data });
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Daftar Mobil</h2>
      <ul>
        {state.cars.map(car => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarSearch;
