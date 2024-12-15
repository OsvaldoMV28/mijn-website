document.addEventListener("DOMContentLoaded", function () {
    // Kaartweergave instellen op het nieuwe adres
    var map = L.map('map').setView([51.324635, 4.943645], 15); // Turnhout coördinaten
  
    // OpenStreetMap-laag toevoegen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
    51.32026708572544, 4.924960933261877
    // Marker toevoegen op het adres
    L.marker([51.32026708572544, 4.924960933261877]).addTo(map)
    .bindPopup('Steenweg op Antwerpen 6, Turnhout') // Toon adres in popup
      .openPopup();
  });
  