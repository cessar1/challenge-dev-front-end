# Challenge Dev FrontEnd - Compañía Eléctrica

## Descripción

Este proyecto simula una interfaz para gestionar la información de clientes de una compañía eléctrica. La aplicación permite agregar, buscar, eliminar y ordenar clientes, así como filtrar aquellos que tienen deudas pendientes.

## Funcionalidades

1. **Agregar Clientes:**
   - Se pueden agregar nuevos clientes proporcionando su nombre, apellido, DNI, tipo de domicilio, consumo en KW y deuda pendiente.

2. **Buscar Monto a Pagar:**
   - Se incluye un buscador para encontrar el monto a pagar por cliente. Los resultados se actualizan en tiempo real.

3. **Mostrar Lista de Clientes:**
   - La interfaz incluye una tabla que muestra la lista de clientes con información detallada, incluido el monto a pagar.

4. **Ordenar Lista Alfabéticamente:**
   - Se proporciona una opción para ordenar la lista de clientes alfabéticamente.

5. **Eliminar Clientes:**
   - Los usuarios tienen la capacidad de eliminar clientes de la lista.

6. **Filtrar Clientes Deudores:**
   - Se ha implementado un filtro para mostrar solo los clientes que tienen deudas pendientes.

## Cálculo del Monto a Pagar

El monto a pagar por cada cliente se calcula considerando el costo de KW según el tipo de domicilio y aplicando descuentos según el consumo realizado y la existencia de deuda pendiente.

### Costo de KW
- Residencial: $2,25 x KW
- Comercial: $4,5 x KW

### Descuentos por Consumo (Solo para Usuarios sin Deuda)
- Residencial:
  - Consumo > 2000 KW: 10% descuento
  - Consumo > 5000 KW: 15% descuento
- Comercial:
  - Consumo > 5000 KW: 10% descuento
  - Consumo > 7000 KW: 15% descuento

### Consideraciones

- Si el usuario tiene deuda pendiente, el monto a pagar incluirá la deuda.
- El código está organizado en módulos de controlador, modelo y vista para facilitar la escalabilidad y mantenimiento.

## Instrucciones de Uso

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Utiliza la interfaz para agregar, buscar, ordenar y eliminar clientes según tus necesidades.

¡Disfruta gestionando los clientes de la compañía eléctrica de manera eficiente!
