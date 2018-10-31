var skiResorts = require("../models/resorts.js");

module.exports = function(app) {
  app.get("/api/resorts", function(req, res) {
    skiResorts.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};
