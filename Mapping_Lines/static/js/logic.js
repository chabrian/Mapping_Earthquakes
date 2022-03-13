// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
//  - OR -
let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
  });

// Get data from cities.js
let cityData = cities;

// Coordinates for each point to be used in the line. (LAX to SFO)
let route1 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
];

let route2 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

let route3 = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

//LAX to SFO
L.polyline(route1, {
    color: "red"
}).addTo(map);

// LAX to SFO to SLC to SEA
L.polyline(route2, {
    color: "yellow",
    opacity: 0.5
}).addTo(map);

// SFO to AUS to YYZ to JFK
L.polyline(route3, {
    color: "blue",
    dashArray: "5 10",
    weight: 4,
    opacity: 0.7
}).addTo(map);


// Loop through and create circleMarkers proportional to population
// cityData.forEach(function(city) {
//     console.log(city);
//     L.circleMarker(city.location, {
//         color: 'orange',
//         weight: 4,
//         fillOpacity: 0.2,
//         radius: city.population/200000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//     // toLocaleString() will format with a thousands separator
//    });
   
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);