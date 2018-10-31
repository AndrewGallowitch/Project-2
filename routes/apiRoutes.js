var db = require("../models");

module.exports = function (app) {

  app.get("/api/search/:state/:name", function(req, res) {
    var userSearch = {
      state: req.params.state,
      // price: req.params.price,
      name: req.params.name
    };

    console.log("body ");
    console.log(userSearch);

    db.Resort.findAll({
      where: {
        $or: [
          { State: userSearch.state },
          { ResortName: userSearch.name }
        ]
      },
      order: [["AdultPrice", 'DESC']]
    }).then(function (results) {
      res.json(results);
    });
  });
};
