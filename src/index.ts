import app from './app';
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv';

const port = process.env.port || 4000;

const init = async () => {
  try {
    dotenv.config();
    await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    const server = http.createServer(app);

    server.listen(port, () => console.log(`server is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
