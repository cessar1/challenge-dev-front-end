import {
  TIPO_DE_DOMICILIO,
  TARIFA_RESIDENCIAL,
  TARIFA_COMERCIAL,
  DESCUENTO_RESIDENCIAL_2000KW,
  DESCUENTO_RESIDENCIAL_5000KW,
  DESCUENTO_COMERCIAL_5000KW,
  DESCUENTO_COMERCIAL_7000KW
} from './modelo.js';

function calcularCostoPorKw(tipoDeDomicilio) {
  return tipoDeDomicilio === TIPO_DE_DOMICILIO.RESIDENCIAL ? TARIFA_RESIDENCIAL : TARIFA_COMERCIAL;
}

function calcularMonto(consumo, costoPorKw) {
  return consumo * costoPorKw;
}

function calcularMontoFinal(deuda, tipoDeDomicilio, consumo, monto) {

  let montoFinal = monto;

  if (deuda === 0) {
    if (tipoDeDomicilio === TIPO_DE_DOMICILIO.RESIDENCIAL) {
      if (consumo >= 5000) {
        montoFinal *= DESCUENTO_RESIDENCIAL_5000KW;
      } else if (consumo >= 2000) {
        montoFinal *= DESCUENTO_RESIDENCIAL_2000KW;
      }
    } else {
      if (consumo >= 7000) {
        montoFinal *= DESCUENTO_COMERCIAL_7000KW;
      } else if (consumo >= 5000) {
        montoFinal *= DESCUENTO_COMERCIAL_5000KW;
      }
    }
  }
  return montoFinal;
}

export { calcularCostoPorKw, calcularMonto, calcularMontoFinal }