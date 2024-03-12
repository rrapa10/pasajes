const express = require('express');
const db = require('../db'); // Ajusta la ruta según la estructura de tu proyecto
const app = express();
const port = 3005;

app.use(express.json());

app.post('/emitir-boleto', (req, res) => {
  const detalles = req.body.detalles;

  const query = `INSERT INTO Boletos (detalles) VALUES ('${detalles}')`;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al emitir el boleto:', error.message);
      res.status(500).send('Error al emitir el boleto');
    } else {
      console.log('Boleto emitido con éxito');
      res.send('Boleto emitido con éxito');
    }
  });
});

app.listen(port, () => {
  console.log(`Servicio de boletos está escuchando en http://localhost:${port}`);
});
