var db = require("../models");
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/main.html"));
  });

  // app.get("/comments", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/comments.html"));
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/404.html"));
  // });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/main.html"));
  });
};
