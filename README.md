# Microservicios de Venta de Pasajes

Este proyecto implementa una arquitectura basada en microservicios para la venta de pasajes. Cada microservicio se encarga de una funcionalidad específica, y se utiliza el patrón SAGA para coordinar las transacciones y las operaciones de compensación en caso de error.

## Microservicios

1. **search-service**
   - Ruta para buscar rutas disponibles.
   - Ruta para reservar una ruta.

2. **seats-service**
   - Ruta para seleccionar asientos.
   - Ruta para deshacer la selección de asientos (compensación).

3. **luggage-service**
   - Ruta para agregar equipaje a una reserva.
   - Ruta para eliminar equipaje de una reserva (compensación).

4. **payment-service**
   - Ruta para realizar el pago.
   - Ruta para deshacer el pago (compensación).

5. **ticket-service**
   - Ruta para emitir boletos.
   - Ruta para deshacer la emisión de boletos (compensación).

6. **saga-service**
   - Ruta para iniciar la saga de venta de pasajes.

7. **compensation-service**
   - Ruta para deshacer una venta de pasajes (compensación).

## Estructura del Proyecto

- **/search-service**
  - Contiene el código fuente y archivos relacionados con el servicio de búsqueda.

- **/seats-service**
  - Contiene el código fuente y archivos relacionados con el servicio de selección de asientos.

- **/luggage-service**
  - Contiene el código fuente y archivos relacionados con el servicio de equipaje.

- **/payment-service**
  - Contiene el código fuente y archivos relacionados con el servicio de pago.

- **/ticket-service**
  - Contiene el código fuente y archivos relacionados con el servicio de emisión de boletos.

- **/saga-service**
  - Contiene el código fuente y archivos relacionados con el servicio de coordinación de la saga.

- **/compensation-service**
  - Contiene el código fuente y archivos relacionados con el servicio de compensación.

## Uso del Proyecto

1. Clona el repositorio.
2. Instala las dependencias para cada microservicio.
3. Configura la base de datos según las necesidades.
4. Inicia cada microservicio en el orden correcto.
5. Realiza solicitudes a los microservicios según la lógica de negocio de venta de pasajes.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias de mejora, por favor, crea un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
