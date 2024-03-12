const express = require('express');
const db = require('../db'); // Ajusta la ruta según la estructura de tu proyecto
const app = express();
const port = 3004;

app.use(express.json());

app.post('/realizar-pago', (req, res) => {
  const monto = req.body.monto;


  const query = `INSERT INTO Pagos (monto) VALUES (${monto})`;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar el pago:', error.message);
      res.status(500).send('Error al realizar el pago');
    } else {
      console.log('Pago realizado con éxito');
      res.send('Pago realizado con éxito');
    }
  });
});

app.listen(port, () => {
  console.log(`Servicio de pago está escuchando en http://localhost:${port}`);
});
