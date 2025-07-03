
const map = L.map('map').setView([52.370216, 4.895168], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap-bijdragers'
}).addTo(map);
L.marker([52.370216, 4.895168]).addTo(map)
  .bindPopup('Startpunt: Amsterdam').openPopup();
