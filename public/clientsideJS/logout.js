var mainApp = {};

$(document).ready(function() {
  //logout stuff

  (function() {
    var firebase_app = firebase;
    var uid = null;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        uid = user.uid;
      } else {
        //redirect to login page
        uid = null;
        window.location.replace("/html/index.html");
      }
    });

    function logOut() {
      firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
  })();
});