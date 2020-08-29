const express = require('express');
const router = require('./routes/index');
const apiErrorHandler = require('./error/api-error-handler');

const app = express();
app.use(express.json());

app.use('/', router);
app.use(apiErrorHandler);

app.listen(8080, () => {
  console.log('server running!');
})