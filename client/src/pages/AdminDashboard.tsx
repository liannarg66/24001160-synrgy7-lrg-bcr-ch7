import axios from 'axios';
import React, { useContext, useState } from 'react';
import { CarContext } from '../contexts/CarContext';

const AdminDashboard: React.FC = () => {
  const { state, dispatch } = useContext(CarContext);
  const [newCar, setNewCar] = useState({ id: 0, name: '' });

  const handleAddCar = () => {
    axios.post('http://localhost:3001/cars', newCar)
      .then(response => {
        dispatch({ type: 'ADD_CAR', payload: response.data });
      });
  };

  const handleDeleteCar = (id: number) => {
    axios.delete(`http://localhost:3001/cars/${id}`)
      .then(() => {
        dispatch({ type: 'DELETE_CAR', payload: id });
      });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        value={newCar.name}
        onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
      />
      <button onClick={handleAddCar}>Add Car</button>
      <ul>
        {state.cars.map(car => (
          <li key={car.id}>
            {car.name}
            <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
