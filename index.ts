import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

const result = dotenv.config();
if (result.error) throw result.error;

const port = process.env.PORT || 3001;
const server = express();

server.use(express.json());

(async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URL as string, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    // });

    // server.get('*', (_, res) => {
    //   res.sendFile(path.join(__dirname, '../index.html'));
    // });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`Ready on port ${port} - ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.log('Server error', e);
    process.exit(1);
  }
})();