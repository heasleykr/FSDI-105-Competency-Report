// Interactive map starting Long/Lat
var map = L.map('map').setView([32.781560, -117.126200], 13);

// Embededed map added to div
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Start marker @ Long/Lat and at to map
L.marker([32.781560, -117.126200]).addTo(map)
    .bindPopup('We are here to serve you! ~The Fashion Pet Family')
    .openPopup();
