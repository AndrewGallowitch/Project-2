$("#searchButton").click(function () {
  event.preventDefault();
});

$("#modalSearch").click(function () {
  event.preventDefault();
  var dash = $("#searchName").val().trim();
  dash = dash.split(" ").join("-").toLowerCase();
  
  $.ajax({
    url: "/api/search",
    type: "GET",
    data: {
      state: $("#stateSearch").val().trim(),
      name: dash
    }
  }).then(function(response) {
    console.log(response);
    $(".resultDump").empty();
    var table = $("<table>");
    var tableBody = $("<tbody>");
    var tableHead = $("<thead><th scope='col'>Id</th><th scope='col'>Resort Name</th><th scope='col'>State</th><th scope='col'>Price</th></thead>")
    for(var i = 0; i < response.length; i++) {
    var tableRow = $("<tr><th class='clickMe'>" + response[i].id + "</th><td>" + response[i].ResortName + "</td><td>" + response[i].State + "</td><td>" + response[i].AdultPrice + "</td></tr>");
    tableBody.append(tableRow);
    }
    table.prepend(tableHead);
    table.append(tableBody);
    $(".resultDump").append(table);

    function titleCase(resort) {
      words = resort.toLowerCase().split("-");
      for (var i = 0; i < words.length; i++) {
        var letters = words[i].split("");
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join("");
      }
      return words.join(" ");
    }
  });
});
