require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT // // 3000;


app.use(express.json());

app.post('/echo', (req, res) => {

  console.log(req.body);
  res.json({ echoed: req.body }); // req.body now available!});
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
