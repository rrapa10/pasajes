const express = require('express');
const db = require('../db'); // Ajusta la ruta según la estructura de tu proyecto
const app = express();
const port = 3003;

app.use(express.json());

app.post('/seleccionar-asientos', async (req, res) => {
  try {
    const { asientos } = req.body;

    const query = `INSERT INTO Asientos (numero_asiento, estado) VALUES (?, ?)`;
    for (const numeroAsiento of asientos) {
      const values = [numeroAsiento, 'seleccionado'];
      await db.query(query, values);
    }


    res.send('Asientos seleccionados con éxito');
  } catch (error) {
    console.error('Error en el servicio de selección de asientos:', error.message);
    res.status(500).send('Error en el servicio de selección de asientos');
  }
});

app.post('/deshacer-seleccion-asientos', async (req, res) => {
  try {

    const query = `UPDATE Asientos SET estado = 'disponible' WHERE estado = 'seleccionado'`;
    await db.query(query);

    res.send('Deshacer selección de asientos completado con éxito');
  } catch (error) {
    console.error('Error al deshacer la selección de asientos:', error.message);
    res.status(500).send('Error al deshacer la selección de asientos');
  }
});

app.listen(port, () => {
  console.log(`Servicio de selección de asientos está escuchando en http://localhost:${port}`);
});
