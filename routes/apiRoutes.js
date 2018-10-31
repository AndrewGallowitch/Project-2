var db = require("../models");

module.exports = function (app) {

  app.get("/api/search", function (req, res) {
    var state = req.query.state;
    var name = req.query.name;

    var whereConditions = [];
    if (state) whereConditions.push({ State: state });
    if (name) whereConditions.push({ ResortName: name });

    db.Resort.findAll({
      where: {
        $and: whereConditions
      },
      order: [["AdultPrice", 'DESC']]
    }).then(function (results) {
      res.json(results);
    });
  });

};
