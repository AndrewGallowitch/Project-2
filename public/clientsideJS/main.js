$("#searchButton").click(function () {
  event.preventDefault();
});

$("#modalSearch").click(function () {
  event.preventDefault();

  $.ajax({
    url: "/api/search",
    type: "GET",
    data: {
      state: $("#stateSearch").val().trim(),
      name: $("#searchName").val().trim()
    }
  }).then(function (response) {
    console.log(response);
  });
});
