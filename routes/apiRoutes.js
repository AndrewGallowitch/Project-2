var db = require("../models");

module.exports = function(app) {
  //   // Get all examples
  //   app.get("/api/examples", function(req, res) {
  //     db.Example.findAll({}).then(function(dbExamples) {
  //       res.json(dbExamples);
  //     });
  //   });

  //   // Create a new example
  //   app.post("/api/examples", function(req, res) {
  //     db.Example.create(req.body).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //       dbExample
  //     ) {
  //       res.json(dbExample);
  //     });
  //   });

  // app.get("/api/search", function(req, res) {
  //   var state = req.query.state;
  //   var price = req.query.price;
  //   var name = req.query.state;
  //   res.json([
  //     {
  //       name: "Jeff's Resort"
  //     },
  //     {
  //       name: keyword + " Resort"
  //     }
  //   ]);
  // });

  app.get("/api/search", function(req, res) {
    db.Resort.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};
