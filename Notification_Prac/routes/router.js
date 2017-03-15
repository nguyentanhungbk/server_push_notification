var router = require('express').Router();

require('../controller/user_controller.js').route(router);

module.exports = router;