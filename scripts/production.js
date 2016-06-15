import express from 'express';
import proxy from 'express-http-proxy';
import { parse } from 'url';

const app = express();

app.use(express.static('build'));

app.use('/api', proxy(process.env.API, {
  forwardPath(req, res) {
    return `/api${parse(req.url).path}`;
  }
}));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Production server running on port ${port}`);
});