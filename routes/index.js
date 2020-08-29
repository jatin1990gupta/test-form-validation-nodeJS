const express = require('express');
const reqController = require('../controller/req');
const schemaValidator = require('../middleware/schema-validator');
const schema = require('../model/userSchema');

const router = express.Router();

router.post('/req', schemaValidator(schema), reqController.passReq);

module.exports = router;