const yup = require('yup');

module.exports = yup.object().shape({
  name: yup.string().oneOf(['John', 'roshan', 'Doe']).default('John'),
  phone: yup.number().positive().integer().required(),
  cart: yup.array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        count: yup.number().required()
      })
  ),
  address: yup.object().shape({
    contactName: yup.string().required(),
    detailAddress: yup.object().shape({
      line1: yup.string().required(),
      line2: yup.string().required(),
      line3: yup.string().required()
    }),
    pin: yup.number().required(),
    country: yup.string().required(),
  })
});