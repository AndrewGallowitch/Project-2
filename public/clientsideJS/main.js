$("#searchButton").click(function() {
  event.preventDefault();
});

$("#modalSearch").click(function() {
  event.preventDefault();
  var userSearch = {
    stateSearch: $("#stateSearch")
      .val()
      .trim(),
    priceSearch: $("#searchPrice")
      .val()
      .trim(),
    nameSearch: $("#searchName")
      .val()
      .trim()
  };
  console.log(userSearch);
  $.ajax("/api/resorts", {
    type: "GET",
    data: userSearch
  }).then(function(response) {
    console.log(response);
  });
});
