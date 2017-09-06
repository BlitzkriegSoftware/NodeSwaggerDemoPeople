'use strict';

var path = require('path');
var fs = require('fs');

exports.getPersonById = function(args, res, next) {
  /**
   * Find people by ID
   * Returns a single people
   *
   * peopleId String ID of person to return
   * returns inline_response_200
   **/
  var peopleId = args.peopleId.value;

  var filename = path.join(AppBase, 'data', peopleId + ".json");

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type', 'application/json');
    var obj = JSON.parse(data);
    res.end(JSON.stringify(obj));
  });

}