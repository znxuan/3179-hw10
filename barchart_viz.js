
var vg_1 = "barchart.json";
var vg_2 = "https://raw.githubusercontent.com/znxuan/3179hw2/refs/heads/main/choropleth_map.vg.json";

// Embed the bar chart
vegaEmbed("#bar_chart", vg_1).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Bar chart loaded");
}).catch(console.error);

// Embed the choropleth map
vegaEmbed("#choropleth_map", vg_2).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Choropleth map loaded");
}).catch(console.error);
