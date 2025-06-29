import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // ✅ Load .env first

import { app } from './app.js';
import connectDB from './db/index.js';

const PORT = process.env.PORT || 7000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });
