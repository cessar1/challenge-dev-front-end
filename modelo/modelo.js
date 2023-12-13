const TIPO_DE_DOMICILIO = {
  RESIDENCIAL: 'Residencial',
  COMERCIAL: 'Comercial'
}

// Tarifas por tipo de domicilio
const TARIFA_RESIDENCIAL = 2.25;
const TARIFA_COMERCIAL = 4.5;

// Descuentos por consumo y tipo de domicilio
const DESCUENTO_RESIDENCIAL_2000KW = 0.9; // 10% de descuento
const DESCUENTO_RESIDENCIAL_5000KW = 0.85; // 15% de descuento
const DESCUENTO_COMERCIAL_5000KW = 0.9; // 10% de descuento
const DESCUENTO_COMERCIAL_7000KW = 0.85; // 15% de descuento

const clientes = [];

export {
  TIPO_DE_DOMICILIO,
  TARIFA_RESIDENCIAL,
  TARIFA_COMERCIAL,
  DESCUENTO_RESIDENCIAL_2000KW,
  DESCUENTO_RESIDENCIAL_5000KW,
  DESCUENTO_COMERCIAL_5000KW,
  DESCUENTO_COMERCIAL_7000KW,
  clientes
};
