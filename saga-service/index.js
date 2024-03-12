const express = require('express');
const axios = require('axios');
const app = express();
const port = 3006;

app.use(express.json());

// Ruta para iniciar la saga de venta de pasajes
app.post('/venta-pasajes', async (req, res) => {
  try {
    const { idUsuario, idRuta, fechaViaje, cantidadAsientos, monto } = req.body;

    // Operación 1: Búsqueda de rutas disponibles
    const searchResult = await axios.post('http://localhost:3001/buscar-rutas');
    const rutaDisponible = searchResult.data.find((ruta) => ruta.id === idRuta && ruta.estado === 'disponible');

    if (!rutaDisponible) {
      throw new Error('La ruta seleccionada no está disponible.');
    }

    // Operación 2: Reserva de ruta y asientos
    await axios.post('http://localhost:3001/reservar-ruta', { idRuta, fechaViaje, cantidadAsientos });

    // Operación 3: Pago
    await axios.post('http://localhost:3004/realizar-pago', { idUsuario, monto });

    // Operación 4: Emisión de boletos
    await axios.post('http://localhost:3005/emitir-boleto', { detalles: 'Detalles del boleto emitido' });

    // Finalización exitosa de la saga
    res.send('Venta de pasajes completada con éxito');
  } catch (error) {
    console.error('Error en la saga de venta de pasajes:', error.message);

    // Operaciones de compensación en caso de error
    await axios.post('http://localhost:3001/deshacer-seleccion-asientos', { /* Datos para deshacer la selección de asientos */ });
    // Podrías incluir operaciones de compensación adicionales según tus necesidades

    res.status(500).send('Error en la saga de venta de pasajes');
  }
});

app.listen(port, () => {
  console.log(`Servicio de saga está escuchando en http://localhost:${port}`);
});
