import express from 'express';
import path from 'path';
import handleRender from './handleRender';

const port = 8080;
const app = express();

app.use('/dist', express.static('dist'));
app.get('/*', handleRender);

app.listen(port, () => {
  console.info(`Express is running on port ${port}.`);
});
