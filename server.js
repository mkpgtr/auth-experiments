import express from 'express';
import morgan from 'morgan'
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import 'express-async-errors';
import blogRoutes from './routes/blogRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import codeRoutes from './routes/codeRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import {body, validationResult} from 'express-validator';
import { validateTestParams } from './middlewares/validationMiddleware.js';
import { authenticateUser } from './middlewares/authMiddleware.js';
import { homePageData } from './data/homePageData.js';

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(morgan('dev'));



app.use('/api/auth', authRoutes)
app.use('/api/dataRoutes',authenticateUser,dataRoutes);
app.use('/api/blogs',authenticateUser, blogRoutes);
app.use('/api/users', authenticateUser,userRoutes);
app.use('/api/codes', authenticateUser,codeRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/api/homepageData',(req,res)=>{
  res.json({data : homePageData});
})

app.get('/', (req, res) => {
  res.json({ message: 'Data received', data: req.body });
});




app.post('/api/v1/test',
validateTestParams,
(req,res)=>{
    res.json({message:'Data received'});
})


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

