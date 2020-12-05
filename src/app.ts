import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import auth0Routes from './routes/auth0.route';
import instaRoutes from './routes/insta.route';

if (process.env.NODE_ENV === 'production') {
  fs.copyFileSync( // copy html
    path.join(__dirname, '../../index.html'),
    path.join(__dirname, '../index.html'),
  );
}

const port = process.env.PORT || 3001;
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/v1/auth0', auth0Routes);
server.use('/api/v1/insta', instaRoutes);

(async () => {
  try {
    
    server.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../index.html'));
    });
    
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`Ready on port ${port} - ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.log('Server error', e);
    process.exit(1);
  }
})();
