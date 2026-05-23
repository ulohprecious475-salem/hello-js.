require("dotenv").config();

const express = require('express');
const app = express();
const PORT = 4000;



app.use(express.json());

app.get('/echo', (req, res) => {

  console.log(req.body);
  res.json({ "echoed": req.body }); // req.body now available!});
});


app.get('/', (req, res) => {
  res.send('My week 2 API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
