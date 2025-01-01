// Initialize the map and set its view to your desired location and zoom level
  const map = L.map('map').setView([41.479736, -71.311124], 16.5); 

  // Add OpenStreetMap tiles to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const greenIcon = L.icon({
  iconUrl: 'assets/icon-location.svg',

  iconSize: [52, 64],
  iconAnchor: [41.479736, -71.311124], 
});
  // Add a marker (pin) to the map at a specific location
  L.marker([41.480459, -71.31062], { icon: greenIcon }).addTo(map);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);