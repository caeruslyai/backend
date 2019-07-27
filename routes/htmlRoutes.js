var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    //res.render("../public/index.html");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
    
};