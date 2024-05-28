import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api', authRoutes);

app.get('/', (req, res) => res.json({ msg: 'Welcome to the MERN Authentication API' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
