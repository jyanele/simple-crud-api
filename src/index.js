import express from 'express';
const app = express();

app.use('/customers', (req, res) => {
  res.send('Hello world!');
});

app.use('/suppliers', (req, res) => {
  res.send('Suppliers');
});

export default app;
