//Vista

import {
  agregarCliente,
  actualizarListaDeClientes,
  buscarCliente,
} from './controlador/controlador.js'

document.getElementById('clienteForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const tipoDeDomicilio = document.getElementById("tipoDeDomicilio").value;
  const consumo = parseInt(document.getElementById("consumoKw").value);
  const deuda = parseInt(document.getElementById("deuda").value);

  agregarCliente(nombre, apellido, dni, tipoDeDomicilio, consumo, deuda);

  const form = document.getElementById('clienteForm');
  form.reset();
});

document.getElementById('buscarCliente').addEventListener('input', () => {
  const buscarTexto = document.getElementById('buscarCliente').value.toLowerCase();
  const tabla = document.getElementById('tablaClientes');
  buscarCliente(tabla, buscarTexto)
})

document.getElementById('cambiarVisibilidad').addEventListener('click', () => {
  cambiarVisibilidad()
})

document.getElementById('ordenarCheckbox').addEventListener('change', () => {
  const checkbox = document.getElementById('ordenarCheckbox');
  const tabla = document.getElementById('tablaClientes');
  actualizarListaDeClientes(tabla, false, checkbox.checked)

})

document.getElementById('filtrarDeudorCheckbox').addEventListener('change', () => {
  const checkbox = document.getElementById('filtrarDeudorCheckbox');
  const tabla = document.getElementById('tablaClientes');
  actualizarListaDeClientes(tabla, checkbox.checked, false)

})

document.addEventListener("listaActualizada", () => {
  console.log('cliente agregado')
  const tabla = document.getElementById('tablaClientes');
  actualizarListaDeClientes(tabla)
})

function cambiarVisibilidad() {
  const tabla = document.getElementById('tablaClientes')
  tabla.classList.toggle('hidden')
}




