var mercadopago = require('mercadopago');

mercadopago.configure({
  sandbox: process.env.SANDBOX == 'true',
  access_token: process.env.MP_ACCESS_TOKEN
});

export default mercadopago;