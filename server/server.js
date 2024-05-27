import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
