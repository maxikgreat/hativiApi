import express from 'express';
import auth0Routes from './routes/auth0.route';
import instaRoutes from './routes/insta.route';

// moved exec to package.json

// import dotenv from 'dotenv';
// const result = dotenv.config();
// if (result.error) throw result.error;


const port = process.env.PORT || 3001;
const server = express();

server.use(express.json());
server.use('/api/v1/auth0', auth0Routes);
server.use('/api/v1/insta', instaRoutes);

(async () => {
  try {
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`Ready on port ${port} - ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.log('Server error', e);
    process.exit(1);
  }
})();