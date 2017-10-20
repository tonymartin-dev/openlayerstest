
// Create latitude and longitude and convert them to default projection (switch order from Google)
var granada = ol.proj.transform([-3.6262912, 37.1809411], 'EPSG:4326', 'EPSG:3857');
var malaga = ol.proj.transform([-4.5642727, 36.7647499], 'EPSG:4326', 'EPSG:3857');
var jaen = ol.proj.transform([-3.8143746, 37.7800931], 'EPSG:4326', 'EPSG:3857');

/*
Basic map
*/

//Create the map
var map = new ol.Map({
  //Layers: they set what is shown
  layers: [
    new ol.layer.Tile({
       source: new ol.source.OSM()
    })
  ],
  //Target: set which element ID will carry the map
   target: 'map1',
   //View: set the options on the map (coordinates, zoom,...)
   view: new ol.View({
     //Coordinates need to be converted into WebMercator projection
     center: granada,
     zoom: 12
   })
});


/*
Map with overlay
*/

  // create a layer with the OSM source
  var layer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });

  // manually create interactions
  var interaction1 = new ol.interaction.DoubleClickZoom();
  var interaction2 = new ol.interaction.DragPan();
  var interaction3 = new ol.interaction.MouseWheelZoom();

  // create a control to add to the map that isn't there by default
  var control1 = new ol.control.FullScreen();
  var control2 = new ol.control.Zoom();

  // center on Granada
  var center = granada;

  // an overlay to set a circle on Granada and Málaga
  var overlay = new ol.Overlay({
    position: center,
    element: document.getElementById('overlay')
  });
  var overlay2 = new ol.Overlay({
    position: malaga,
    element: document.getElementById('overlay2')
  });
  var marker = new ol.Overlay({
    position: jaen,
    element: document.getElementById('marker')
  });

  // view, starting at the center
  var view = new ol.View({
    center: center,
    zoom: 6
  });

  // finally, the map with our custom interactions, controls and overlays
  var map2 = new ol.Map({
    target: 'map2',
    layers: [layer],
    interactions: [interaction1, interaction2, interaction3],
    controls: [control1, control2],
    overlays: [overlay, overlay2, marker],
    view: view
  });
