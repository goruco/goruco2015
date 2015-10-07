function initialize() {
  var conferenceLatlng = new google.maps.LatLng(40.740674, -73.996242);
  var prePartyLatlng = new google.maps.LatLng(40.7545989, -73.9901948);
  var boatLatlng = new google.maps.LatLng(40.730438, -74.011300);
  var mapOptions = {
    center: conferenceLatlng,
    zoom: 14
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var conferenceMarker = new google.maps.Marker({
    position: conferenceLatlng,
    map: map,
    title: 'Conference!'
  });
  var prePartyMarker = new google.maps.Marker({
    position: prePartyLatlng,
    map: map,
    title: 'Pre Party!'
  });
  var boatMarker = new google.maps.Marker({
    position: boatLatlng,
    map: map,
    title: 'Boat Party!'
  });

  conferenceMarker.setMap(map);
  prePartyMarker.setMap(map);
  boatMarker.setMap(map);

  var prePartyInfowindow = new google.maps.InfoWindow({ content: "<div class='map-info-content'><h4>Pre-Party</h4><p>Stollway Event Space<br />250 West 39th Street</p></div>" });
  var conferenceInfowindow = new google.maps.InfoWindow({ content: "<div class='map-info-content'><h4>Conference</h4><p>The Altman Building,<br />135 West 18th Street</p></div>" });
  var boatInfowindow = new google.maps.InfoWindow({ content: "<div class='map-info-content'><h4>After Party Manhattan Cruise</h4><p>Pier 40 at 353 West Street</p></div>" });

  google.maps.event.addListener(conferenceMarker, 'click', function() {
    conferenceInfowindow.open(map, conferenceMarker);
  });
  google.maps.event.addListener(prePartyMarker, 'click', function() {
    prePartyInfowindow.open(map, prePartyMarker);
  });
  google.maps.event.addListener(boatMarker, 'click', function() {
    boatInfowindow.open(map, boatMarker);
  });

  document.getElementById('conference').addEventListener("click", function() { google.maps.event.trigger(conferenceMarker, 'click') }, false);
  document.getElementById('pre-party').addEventListener("click", function() { google.maps.event.trigger(prePartyMarker, 'click') }, false);
  document.getElementById('after-party').addEventListener("click", function() { google.maps.event.trigger(boatMarker, 'click') }, false);
}

google.maps.event.addDomListener(window, 'load', initialize);
