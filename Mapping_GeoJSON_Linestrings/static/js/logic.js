// Get data from data.js
// let airportData = sanFranAirport;

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
// L.geoJson(airportData, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
//      }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
};

let map = L.map("mapid", {
    center: [
        44.0, -80.0
    ],
    zoom: 2,
    layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/chabrian/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/chabrian/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
          console.log(layer);
          layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h3>Airport name: " + feature.properties.name + "</h3>");
        }
  }).addTo(map);
});