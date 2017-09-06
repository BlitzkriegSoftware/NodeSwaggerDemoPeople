'use strict';

var path = require('path');
var fs = require('fs');

exports.peopleGet = function(args, res, next) {
  /**
   * Get people list
   * returns inline_response_200
   **/
  var list = [];
  var dirname = path.join(AppBase, 'data');
  fs.readdir(dirname, 'utf8', function(err, files) {
    var remaining = files.length;
    files.forEach(function(value) {
      var filename = path.join(AppBase, 'data', value);
      fs.readFile(filename, 'utf8', function(err, data) {
        if(err) throw err;
        var obj = JSON.parse(data);
        list.push(obj);
        remaining -= 1;
        if(remaining == 0) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(list));
        }
      });
    });
  });
}

