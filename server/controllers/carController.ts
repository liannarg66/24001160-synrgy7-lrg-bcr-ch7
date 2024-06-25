import { Request, Response } from 'express';
import { Car, cars } from '../models/carModel';

// Mendapatkan daftar mobil
export const getCars = (req: Request, res: Response) => {
  res.json(cars);
};

// Menambahkan mobil baru ke dalam daftar
export const addCar = (req: Request, res: Response) => {
  const newCar: Car = req.body;
  cars.push(newCar);
  res.status(201).json(newCar);
};

// Menghapus mobil berdasarkan ID
export const deleteCar = (req: Request, res: Response) => {
  const carId = parseInt(req.params.id, 10);
  const carIndex = cars.findIndex(car => car.id === carId);

  if (carIndex !== -1) {
    cars.splice(carIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
};
