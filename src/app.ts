import express from 'express';
import cors from 'cors';
import todoRoute from './resources/todo/todo.route';
import router from './resources/todo/todo.route';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use('/api/todo', router);

export default app;
