import express from 'express';
import path from 'path';
import handleRender from './handleRender';

const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname + '/server')));
app.get('*', handleRender);

app.listen(port, () => {
  console.info(`Express is running on port ${port}.`);
});
