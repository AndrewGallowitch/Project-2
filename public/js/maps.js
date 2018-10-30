// var input = $("search");
// var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Ski%20Resorts%20in%20Coloradot&inputtype=textquery&radius200000&fields=photos,formatted_address,name,rating,geometry&key=AIzaSyAZsj-jgxkbLJaq2tMsii9VcgIN-TdIk2w"

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     var result = response.candidates;
//     for (var i = 0; i < result.length; i++) {
//         var image = $("<img>");
//         var name = $("<h1>");
//         var address = $("<p>");
//         var imgUrl = result[i].photos.html_attributions;
//         image.attr("src", imgUrl);
//         name.text(result[i].name);
//         address.text(result[i].formatted_address);
//     };
//     $(".names").append(name, image, address);
//     console.log(name);
// });
