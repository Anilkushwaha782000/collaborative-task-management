
const express = require('express');
const path = require('path');


const app = express();


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
