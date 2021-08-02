var mymap = L.map('mapid').setView([51.505, -0.09], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWljaGFlbHNvdXRoIiwiYSI6ImNrcnM4NDg2bzE0aGcydHBmODhxd2hzdmIifQ.-JGE450yl9FhwyzbrjiKWQ'
}).addTo(mymap);

var layerControl = L.control.layers(null, null).addTo(mymap);

function Load() {
    console.log("Load GeoJSON layer");

    const geoJSONLayerCombo = document.getElementById("geoJSONLayerCombo");
    const geoJSONFile = geoJSONLayerCombo.value;
    const geoJSONURL = '/geojson/' + geoJSONFile;

    console.log("Loading GeoJSON: " + geoJSONURL);

    fetch(geoJSONURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const geoJSONLayer = L.geoJSON(data)
            geoJSONLayer.addTo(mymap);
            layerControl.addOverlay(geoJSONLayer, geoJSONFile)
        });
}




