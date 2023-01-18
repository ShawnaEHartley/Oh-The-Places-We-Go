import Choropleth from './scripts/chroropleth' 
import hale from './scripts/hale.json'
import world from './scripts/world.json'
import countrymesh from './scripts/countrymesh.json'
import locations from './scripts/locations.json'
import migbuck from '../assets/countryAllIndicators/migrationbuckets.json'
import migpopchange from '../assets/countryAllIndicators/listofmigrationpopchange.json'

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
  colorbuckets: migbuck,
  countryvalue: migpopchange,
  cb: async (_, i) => {
    let loc = locations.data.find((loc) => {
      return loc.name === i.properties.name
    })
    console.log(loc)
    if (!loc) return;
    // to get net migration # indicator 65
    const nmc = await fetch(`https://population.un.org/dataportalapi/api/v1/data/indicators/65/locations/${loc.id}/start/2020/end/2020`);
    const dta = await nmc.json();
    const netmigration = dta.data[0].value;
    // console.log(dta.data[0].value)

    // to get total pop (by sex) indicator 49
    const totpop = await fetch(`https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/${loc.id}/start/2020/end/2020`);
    const dta2 = await totpop.json();
    //  male = idx 0, female = idx 1, both = idx 2
    const totalpop = dta2.data[2].value;
    const malepop = dta2.data[0].value;
    const femalepop = dta2.data[1].value;

    const populationchange = await fetch (`https://population.un.org/dataportalapi/api/v1/data/indicators/50/locations/${loc.id}/start/2020/end/2020`);
    const dta3 = await populationchange.json();
    const popchg = dta3.data[0].value;



    const naturalpopchange = await fetch (`https://population.un.org/dataportalapi/api/v1/data/indicators/52/locations/${loc.id}/start/2020/end/2020`);
    const dta4 = await naturalpopchange.json();
    const natpopchg = dta4.data[0].value;
    

    console.log(`${(netmigration/totalpop * 100).toFixed(2)}%`);

    document.getElementById('country').innerHTML='';
    document.getElementById('country').append(loc.name)

    document.getElementById('totpop').innerHTML='';
    document.getElementById('totpop').append(totalpop);

    document.getElementById('mpop').innerHTML='';
    document.getElementById('mpop').append(malepop);

    document.getElementById('percmpop').innerHTML='';
    document.getElementById('percmpop').append(`${(malepop/totalpop * 100).toFixed(2)}%`);

    document.getElementById('fpop').innerHTML='';
    document.getElementById('fpop').append(femalepop);

    document.getElementById('percfpop').innerHTML='';
    document.getElementById('percfpop').append(`${(femalepop/totalpop * 100).toFixed(2)}%`);

    document.getElementById('popchange').innerHTML='';
    document.getElementById('popchange').append(popchg);

    document.getElementById('percpopchange').innerHTML='';
    document.getElementById('percpopchange').append(`${(popchg/totalpop * 100).toFixed(2)}%`);

    document.getElementById('natpopchg').innerHTML='';
    document.getElementById('natpopchg').append(natpopchg);

    document.getElementById('percnatpopchg').innerHTML='';
    document.getElementById('percnatpopchg').append(`${(natpopchg/popchg * 100).toFixed(2)}%`);

    document.getElementById('netmigchg').innerHTML='';
    document.getElementById('netmigchg').append(netmigration);

    document.getElementById('percnetmigchg').innerHTML='';
    document.getElementById('percnetmigchg').append(`${(netmigration/popchg * 100).toFixed(2)}%`);

  }
})

document.getElementById('map').appendChild(chart);




