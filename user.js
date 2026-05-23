require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());



app.get('/echo', (req, res) => {
    res.json({ "echoed": req.body }); // req.body now available!});
});



app.get('/', (req, res) => {
  res.send('My week 2 API!');
});



app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    // simulate DB fetch
    res.json({ id, name: `Ulohprecious`, email: `ulohprecious475@gmail.com` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});