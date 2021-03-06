// var input = $("search");
// var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Ski%20Resorts%20in%20Coloradot&inputtype=textquery&radius200000&fields=photos,formatted_address,name,rating,geometry&key=AIzaSyAZsj-jgxkbLJaq2tMsii9VcgIN-TdIk2w"

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(39.113014, -105.358887),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  setMarkers(map);
}

var resorts = [
  ["Aspen Snowmass", 39.209, -106.9499, 1],
  ["Deer Valley", 40.6374, -111.4783, 2],
  ["Breckenridge", 39.4817, -106.0384, 3],
  ["Alta Ski Resort", 40.5883, -111.6358, 4],
  ["Vail Ski Resort", 39.6061, -106.355, 5]
];

function setMarkers(map) {
  var marker;
  function createListener(resort, marker) {
    var contentString =
      "<h1 class='firstHeading text-dark'>" + resort + "</h1>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener("click", function() {
      console.log(marker);
      infowindow.open(map, marker);
    });
  }
  for (var i = 0; i < resorts.length; i++) {
    var resort = resorts[i];

    marker = new google.maps.Marker({
      position: { lat: resort[1], lng: resort[2] },
      map: map,
      title: resort[0],
      zIndex: resort[3]
    });
    createListener(resort[0], marker);
  }
}
