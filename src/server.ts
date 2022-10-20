import express, { application } from 'express';
const app = express();
const port = 3000;
app.locals.counter = 0;

app.get('/', (req, res) => {
  res.send('Hello world. This is a web server!');
});

app.post('/counter', (req, res) => {
  app.locals.counter++;
  res.send('Counter: ' + app.locals.counter);
})

app.get('/counter', (req, res) => {
  res.send('Counter: ' + app.locals.counter);
})

app.delete('/counter', (req, res) => {
  app.locals.counter = 0;
  res.send('The counter has been reset!')
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
