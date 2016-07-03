var key = "AIzaSyCcwX9E2mNT62CxVqpubP0Ga7ioTM0Wg3k";
var myLocation = {lat: -29.245670, lng: -51.356745};
var destiny = {lat: -29.220816, lng:  -51.345769};

function initialize() {

// Exibir mapa;
  var myLatlng = new google.maps.LatLng(myLocation);
  var mapOptions = {
  zoom: 14,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}


// Exibir o mapa na div #map;
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // Criando um marcador
  var marker = new google.maps.Marker({
    map: map,
    position: myLocation,
    title: "Hello world"
  });
  var direcao = new google.maps.DirectionsRenderer({
    map: map
  });

  var request = {
  destination: destiny,
  origin: myLocation,
  travelMode: google.maps.TravelMode.DRIVING
};

var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      direcao.setDirections(response);
    }
  });
}

// Função para carregamento assíncrono
  function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src ="http://maps.googleapis.com/maps/api/js?key="+ key + "&callback=initialize";

  document.body.appendChild(script);
}

  window.onload = loadScript;
