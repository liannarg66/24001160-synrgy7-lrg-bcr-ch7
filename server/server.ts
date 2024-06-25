import express from 'express';
import cors from 'cors';
import carRoutes from './routes/carRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', carRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
