const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`server is running on prot 3000`)
})

app.get('/', (req, res) => {
  res.send("Hello from node api")
})