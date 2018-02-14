
/*
 * GET home page.
 */
var data = require('../data.json');
exports.view = function(req, res){
  var id = req.params.id;
  var event = data.events[id];
  res.render('eventSearch',event);
};