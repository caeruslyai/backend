var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.post("/database", function(req, res) {
    
    db.User.create(req.body).then(function(postData) {
        res.json(postData);
    });

  });

  app.get("/database", function(req, res) {

    db.User.findAll({}).then(function(data) {
        res.json(data);
    });

  })
    
};