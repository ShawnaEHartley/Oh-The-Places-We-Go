import Choropleth from './scripts/chroropleth' 
import hale from './scripts/hale.json'
import world from './scripts/world.json'
import countrymesh from './scripts/countrymesh.json'

const countries = topojson.feature(world, world.objects.countries);
const chart = Choropleth(hale, {
  id: d => d.name, // country name, e.g. Zimbabwe
  value: d => d.hale, // health-adjusted life expectancy
  range: d3.interpolateYlGnBu,
  features: countries,
  featureId: d => d.properties.name, // i.e., not ISO 3166-1 numeric
  borders: countrymesh,
  projection: d3.geoEqualEarth(),
  title: (_, d) => d ? d.name : '',
})

document.body.appendChild(chart);

console.log(typeof hale)

// document.addEventListener('DOMContentLoaded', () => {
//   // console.log("hello world")
//   const root = document.
//   querySelector('#root')

//   new Example(root);
// })

// document.addEventListener('DOMContentLoaded', async () => {
//   const mapDiv = document.getElementById('map');
//   mapDiv.style.width = '50%';

//   const res = await fetch(`https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json`)
//   const mapJson = await res.json()
//   const foo = map(mapJson)
//   debugger

//   mapDiv.appendChild(foo);
// });

