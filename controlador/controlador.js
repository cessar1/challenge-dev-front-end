import {
  clientes
} from '../modelo/modelo.js';

import {
  calcularCostoPorKw,
  calcularMonto,
  calcularMontoFinal
} from '../modelo/calculadora.js';


function agregarCliente(nombre, apellido, dni, tipoDeDomicilio, consumo, deuda) {
  let costoPorKw = calcularCostoPorKw(tipoDeDomicilio);
  let monto = calcularMonto(consumo, costoPorKw);
  let montoFinal = calcularMontoFinal(deuda, tipoDeDomicilio, consumo, monto);

  let newCliente = [nombre, apellido, dni, tipoDeDomicilio, consumo, deuda, montoFinal];
  clientes.push(newCliente);

  document.dispatchEvent(new Event('listaActualizada'));
}

function eliminarCliente(index) {
  clientes.splice(index, 1);
  document.dispatchEvent(new Event('listaActualizada'));
}

function actualizarListaDeClientes(tabla, mostrarDeudores = false, ordenado = false) {
  // Limpiar la tabla
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  
  let clientesOriginal = clientes.slice()
  
  let listaAMostrar = mostrarDeudores
    ? clientes.filter(cliente => cliente[5] > 0) // Filtrar clientes deudores
    : clientesOriginal

  // Ordenar la lista alfabéticamente si es necesario
  if (ordenado) {
    listaAMostrar = listaAMostrar.sort(function (a, b) {
      return (a[0] + ' ' + a[1]).localeCompare(b[0] + ' ' + b[1]);
    });
  }

  // Llenar la tabla
  listaAMostrar.forEach((cliente, index) => {
    var fila = tabla.insertRow(-1);

    cliente.forEach((info, colIndex) => {
      var celda = fila.insertCell(colIndex);
      celda.textContent = info;
    });

    // Agregar botón para eliminar el cliente
    var botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarCliente(index);

    var celdaBoton = fila.insertCell(-1);
    celdaBoton.appendChild(botonEliminar);
  });
}

// Función para buscar un cliente y mostrar el monto a pagar
function buscarCliente(tabla, buscarTexto) {

  for (var i = 1; i < tabla.rows.length; i++) {
    var nombre = tabla.rows[i].cells[0].textContent.toLowerCase();
    var apellido = tabla.rows[i].cells[1].textContent.toLowerCase();
    var dni = tabla.rows[i].cells[2].textContent.toLowerCase();
    var mostrar = [nombre, apellido, dni].some(valor => valor.includes(buscarTexto))
    tabla.rows[i].style.display = mostrar ? '' : 'none';
  }
}

export {
  agregarCliente,
  actualizarListaDeClientes,
  buscarCliente,
};
