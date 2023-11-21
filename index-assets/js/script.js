/* originally authored by soydalto - https://github.com/soydalto/Google-Maps-API */

/* Google Maps */

function initMap() {
  var coord = { lat: 19.624405, lng: -96.43918 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}

/* originally authored by Emprinnos - https://github.com/Emprinnos/bootStrapCompleto */

var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Cosechas Toto")
  .pauseFor(200)
  .deleteChars(10)
  .start();
