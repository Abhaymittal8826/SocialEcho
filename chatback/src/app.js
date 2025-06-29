import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ limit: '16kb', extended: true }));
app.use(express.static('public'));
app.use(cookieParser());  
app.use('/api', authRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to Chatback');
});
 

app.use('/posts', postRoutes);
export { app };
