'use strict';

var url = require('url');

var PeopleId = require('../services/PeopleIdService');

module.exports.getPersonById = function getPersonById (req, res, next) {
  PeopleId.getPersonById(req.swagger.params, res, next);
};
