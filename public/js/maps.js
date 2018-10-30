// var input = $("search");
// var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Ski%20Resorts%20in%20Coloradot&inputtype=textquery&radius200000&fields=photos,formatted_address,name,rating,geometry&key=AIzaSyAZsj-jgxkbLJaq2tMsii9VcgIN-TdIk2w"

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(39.113014, -105.358887),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}