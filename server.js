const express = require("express");
const app     = express();


app.use(express.static(__dirname));

const server = app.listen(8080, () => {
  
    console.log('Your App is at http://localhost:8080');
  });