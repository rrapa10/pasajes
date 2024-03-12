const express = require('express');
const db = require('../db'); // Ajusta la ruta según la estructura de tu proyecto
const app = express();
const port = 3001;

app.use(express.json());

// Ruta para buscar rutas disponibles
app.get('/buscar-rutas', async (req, res) => {
  try {

    const query = `SELECT * FROM Rutas WHERE estado = 'disponible'`;
    const results = await db.query(query);

    res.json(results);
  } catch (error) {
    console.error('Error en el servicio de búsqueda de rutas:', error.message);
    res.status(500).send('Error en el servicio de búsqueda de rutas');
  }
});

// Ruta para reservar una ruta
app.post('/reservar-ruta', async (req, res) => {
  try {
    const { idRuta, fechaViaje, cantidadAsientos } = req.body;

    const query = `
      UPDATE Rutas
      SET estado = 'reservado', fecha_viaje = ?, cantidad_asientos = ?
      WHERE id = ? AND estado = 'disponible'
    `;
    const values = [fechaViaje, cantidadAsientos, idRuta];
    const result = await db.query(query, values);

    if (result.affectedRows === 0) {
      throw new Error('No se pudo reservar la ruta. La ruta no está disponible.');
    }

    res.send('Ruta reservada con éxito');
  } catch (error) {
    console.error('Error en el servicio de reserva de rutas:', error.message);
    res.status(500).send('Error en el servicio de reserva de rutas');
  }
});

app.listen(port, () => {
  console.log(`Servicio de búsqueda y reserva de rutas está escuchando en http://localhost:${port}`);
});
