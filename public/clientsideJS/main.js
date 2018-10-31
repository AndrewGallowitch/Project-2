$("#searchButton").click(function() {
  event.preventDefault();
});

$("#modalSearch").click(function() {
  event.preventDefault();
  var userSearch = {
    stateSearch: $("#stateSearch")
      .val()
      .trim(),
    nameSearch: $("#searchName")
      .val()
      .trim()
  };
  console.log(userSearch);
  $.ajax({
    url: "/api/search/" + userSearch.stateSearch + "/" + userSearch.nameSearch,
    type: "GET"
  }).then(function(response) {
    console.log(response);
  });
});
