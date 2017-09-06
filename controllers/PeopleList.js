'use strict';

var url = require('url');

var PeopleList = require('../services/PeopleListService');

module.exports.peopleGet = function peopleGet (req, res, next) {
  PeopleList.peopleGet(req.swagger.params, res, next);
};
