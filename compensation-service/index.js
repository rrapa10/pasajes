const express = require('express');
const axios = require('axios');
const app = express();
const port = 3007;

app.use(express.json());

app.post('/compensar', async (req, res) => {
  try {
    const { compensacion } = req.body;

    // Lógica de compensación según el paso específico
    if (compensacion === 'seleccionar-asientos') {
      // Simulamos deshacer la selección de asientos
      console.log('Compensación: Deshacer selección de asientos');
      const responseDesSeleccion = await axios.post('http://localhost:3003/deshacer-seleccion-asientos');
      console.log(responseDesSeleccion.data);
    } else if (compensacion === 'realizar-pago') {
      // Simulamos revertir el pago
      console.log('Compensación: Revertir el pago');
      const responseRevertirPago = await axios.post('http://localhost:3004/revertir-pago');
      console.log(responseRevertirPago.data);
    } else if (compensacion === 'emitir-boleto') {
      // Simulamos anular la emisión del boleto
      console.log('Compensación: Anular la emisión del boleto');
      const responseAnularBoleto = await axios.post('http://localhost:3005/anular-boleto');
      console.log(responseAnularBoleto.data);
    }

    res.send('Compensación realizada con éxito');
  } catch (error) {
    console.error('Error en la compensación:', error.message);
    res.status(500).send('Error en la compensación');
  }
});

app.listen(port, () => {
  console.log(`Servicio de compensación está escuchando en http://localhost:${port}`);
});
