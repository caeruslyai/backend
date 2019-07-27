var db = require("../models");
var axios = require('axios');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    //res.render("../public/index.html");
    res.send('test');
  });
    
};