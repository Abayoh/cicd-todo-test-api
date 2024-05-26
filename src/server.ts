import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConfig from './config/dbConfig';

//routes
import todoRoutes from './routes/todoRoutes';

//error handler

//import { AccessTokenClaims } from './lib/types';

// declare global {
//   namespace Express {
//     interface Request {
//       user: AccessTokenClaims;
//     }
//   }
// }

dotenv.config();
dbConfig();
const app = express();
const port = 80;

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  //console.log(diContainer);

  next();
});

// Define a route
app.get('/v0', (req, res) => {
  res.send('Welcome to ABIE Financial service');
});

app.get('/favicon.ico', (req, res) => {
  // Send a custom response or an empty 204 (No Content) response
  res.status(204).end();
});

// auth routes
app.use('/v0/todos', todoRoutes);

//error

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
        message: err.message,
        code: err.code,
    });
    
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
