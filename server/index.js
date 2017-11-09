import express from 'express';
import handleRender from './handleRender';

const port = 8080;
const app = express();

app.use(express.static('dist'));

app.get('*', handleRender);

app.listen(port, () => {
  console.info(`Express is running on port ${port}.`);
});
