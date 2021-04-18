'use strict';

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  console.log("[GET] Peticion Recibida sin errores")
  res.send('Taller Kubernetes URACCAN!');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);