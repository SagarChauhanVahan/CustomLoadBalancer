const express = require('express');
const app = express();

const port  = process.env.PORT;

app.listen(port, () => console.log(`Listening to port ${port}.`));

app.get('*', function (req, res) {
  console.log(`Inside port ${port}`);
    console.log(req.headers);
  res.send(`Hello User from port ${port}.`)
});

