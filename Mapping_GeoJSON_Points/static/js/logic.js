// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
//  - OR -
let map = L.map("mapid", {
    center: [
        37.5, -122.5
    ],
    zoom: 10
  });

// Get data from cities.js
let airportData = sanFranAirport;

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// using pointToLayer function
// L.geoJson(airportData, {
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country);
//      }
// }).addTo(map);

// using onEachFeature function
L.geoJson(airportData, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
     }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);