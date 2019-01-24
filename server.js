const express = require('express');
const app = express();


app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
})
