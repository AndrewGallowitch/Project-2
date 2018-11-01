$("#searchButton").click(function() {
  event.preventDefault();
});

$("#modalSearch").click(function() {
  event.preventDefault();
  var dash = $("#searchName")
    .val()
    .trim();
  dash = dash
    .split(" ")
    .join("-")
    .toLowerCase();

  $.ajax({
    url: "/api/search",
    type: "GET",
    data: {
      state: $("#stateSearch")
        .val()
        .trim(),
      name: dash
    }
  }).then(function(response) {
    console.log(response);
    $(".resultDump").empty();
    var table = $("<table>");
    var tableBody = $("<tbody>");

    var tableHead = $(
      "<thead><th id='idTable' scope='col'>Id</th><th id='tableName' scope='col'>Resort Name</th><th id='tableState' scope='col'>State</th><th id='tablePrice' scope='col'>Price</th></thead>"
    );

    for (var i = 0; i < response.length; i++) {
      words = response[i].ResortName.toLowerCase().split("-");
      for (var j = 0; j < words.length; j++) {
        var letters = words[j].split("");
        letters[0] = letters[0].toUpperCase();
        words[j] = letters.join("");
      }
      var formatWord = words.join(" ");

      var tableRow = $(
        "<tr><th class='clickMe'>" +
          response[i].id +
          "</th><td>" +
          formatWord +
          "</td><td>" +
          response[i].State +
          "</td><td>$" +
          response[i].AdultPrice +
          "</td></tr>"
      );
      tableBody.append(tableRow);
    }
    table.prepend(tableHead);
    table.append(tableBody);
    $(".resultDump").append(table);
  });
});
