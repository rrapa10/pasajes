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
### Tablas del Modelo

1. **Usuarios:**
   - `id` (Clave primaria)
   - `nombre`
   - `email`

2. **Asientos:**
   - `id` (Clave primaria)
   - `id_usuario` (Clave foránea referenciando a la tabla Usuarios)
   - `numero_asiento`
   - `estado` (Enum: 'disponible', 'seleccionado', 'reservado')

3. **Equipaje:**
   - `id` (Clave primaria)
   - `id_reserva` (Clave foránea referenciando a la tabla de Reservas)
   - `peso`
   - `descripcion`

4. **Pagos:**
   - `id` (Clave primaria)
   - `monto`
   - `fecha`

5. **Boletos:**
   - `id` (Clave primaria)
   - `detalles`
   - `fecha_emision`

6. **Rutas:**
   - `id` (Clave primaria)
   - `estado` (Enum: 'disponible', 'reservado', 'seleccionado')
   - `fecha_viaje`
   - `cantidad_asientos`

7. **Reservas:**
   - `id` (Clave primaria)
   - `id_usuario` (Clave foránea referenciando a la tabla Usuarios)
   - `id_ruta` (Clave foránea referenciando a la tabla Rutas)
   - `fecha_reserva`
   - `cantidad_asientos`

### Buenas Prácticas Aplicadas

1. **Normalización del Modelo:**
   - Se mantiene el modelo en una forma normalizada para evitar redundancias y mejorar la integridad de los datos.

2. **Claves Primarias y Foráneas:**
   - Se definen claves primarias y foráneas adecuadamente para establecer relaciones y garantizar la consistencia de los datos.

3. **Enums para Estados:**
   - Se utiliza el tipo `ENUM` para representar estados específicos, mejorando la claridad del modelo.

4. **Índices:**
   - Se crean índices en columnas comúnmente utilizadas en consultas para mejorar el rendimiento.

5. **Validación de Datos:**
   - Se implementa la validación de datos en los servicios para garantizar la coherencia y cumplir con los requisitos del modelo.

6. **Transacciones:**
   - Se utiliza el manejo de transacciones en operaciones que involucran múltiples pasos para garantizar la consistencia de la base de datos.

7. **Documentación del Modelo:**
   - Se proporciona documentación clara y completa para cada tabla y columna.

8. **Separación de Servicios:**
   - Cada microservicio se encarga de operaciones específicas, permitiendo una estructura modular y escalable del sistema.

9. **Seguridad de Datos:**
   - Se aplican prácticas de seguridad para proteger la integridad y confidencialidad de los datos.

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
