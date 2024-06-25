import { Router } from 'express';
import { getCars, addCar, deleteCar } from '../controllers/carController';

const router = Router();

router.get('/cars', getCars);
router.post('/cars', addCar);
router.delete('/cars/:id', deleteCar);

export default router;
