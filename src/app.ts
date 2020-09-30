import express from 'express';
import axios from './axios';

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

    server.get('/test', async (req, res) => {
      try {
        const response = await axios.get('/search/nike');
        res.json(response.data);
      } catch (e) {
        res.status(500).send('Error')
      }
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