// This array contains the coordinates for all bus stops between the Museum and the Hub
const busStops = [
  [-82.36984, 29.63589],
  [-82.36840, 29.63779],
  [-82.36523, 29.63765],
  [-82.36224, 29.63754],
  [-82.35670, 29.63819],
  [-82.35362, 29.63849],
  [-82.35139, 29.63878],
  [-82.35035, 29.64249],
  [-82.35024, 29.64580],
  [-82.34962, 29.64818],
  [-82.34528, 29.64861]
];

// TODO: add your own access token
mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-82.35512, 29.64391],
  zoom: 14,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-82.36984, 29.63589]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
