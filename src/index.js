import Choropleth from './scripts/chroropleth' 
import hale from './scripts/hale.json'
import world from './scripts/world.json'
import countrymesh from './scripts/countrymesh.json'
import locations from './scripts/locations.json'
import migbuck from '../assets/countryAllIndicators/migrationbuckets.json'
import popchange from '../assets/countryAllIndicators/listofpopchange.json'
import natpopchange from '../assets/countryAllIndicators/listofnatpopchange.json'
import migpopchange from '../assets/countryAllIndicators/listofmigrationpopchange.json'

// modal 
const modal  = document.getElementById("modal-wrap");
const modalclose = document.getElementById("modal-close");
modalclose.addEventListener("click", () =>( closeModal()))

function closeModal() {
  modal.style.display = "none";
  radiomigrationpopulationchange.focus();
}

const modalopen = document.getElementById("modal-open")
modalopen.addEventListener("click", () =>( openModal()))

function openModal() {
  modal.style.display = "block";
}



let location = {};

async function updatelocation(location) {
  // to get net migration # indicator 65
    let nmc = await fetch(`https://population.un.org/dataportalapi/api/v1/data/indicators/65/locations/${location.id}/start/${year}/end/${year}`);
    let dta = await nmc.json();
    let netmigration = dta.data[0].value;

    // to get total pop (by sex) indicator 49
    let totpop = await fetch(`https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/${location.id}/start/${year}/end/${year}`);
    let dta2 = await totpop.json();
    let totalpop = dta2.data.find((obj) => obj.sex === "Both sexes").value;
    let malepop = dta2.data.find((obj) => obj.sex === "Male").value;
    let femalepop = dta2.data.find((obj) => obj.sex === "Female").value;

    let populationchange = await fetch (`https://population.un.org/dataportalapi/api/v1/data/indicators/50/locations/${location.id}/start/${year}/end/${year}`);
    let dta3 = await populationchange.json();
    let popchg = dta3.data[0].value;

    let naturalpopchange = await fetch (`https://population.un.org/dataportalapi/api/v1/data/indicators/52/locations/${location.id}/start/${year}/end/${year}`);
    let dta4 = await naturalpopchange.json();
    let natpopchg = dta4.data[0].value;
    
    cleartable();

    document.getElementById('year').append(year)
    document.getElementById('country').append(location.name)
    document.getElementById('totpop').append(totalpop);
    document.getElementById('mpop').append(malepop);
    document.getElementById('percmpop').append(`${(malepop/totalpop * 100).toFixed(2)}%`);
    document.getElementById('fpop').append(femalepop);
    document.getElementById('percfpop').append(`${(femalepop/totalpop * 100).toFixed(2)}%`);
    document.getElementById('popchange').append(popchg);
    document.getElementById('percpopchange').append(`${(popchg/totalpop * 100).toFixed(2)}%`);
    document.getElementById('netmigchg').append(netmigration);
    document.getElementById('percnetmigchg').append(`${(netmigration/totalpop *100).toFixed(2)}%`);
    document.getElementById('percmigchg').append(`${(netmigration/popchg * 100).toFixed(2)}% *`);
    // document.getElementById('natpopchg').append(natpopchg);
    // document.getElementById('percnatchg').append(`${(natpopchg/totalpop *100).toFixed(2)}%`);
    // document.getElementById('percnatpopchg').append(`${(natpopchg/popchg * 100).toFixed(2)}% *`);
  };

let year = 2021;
function cleartable() {
  document.getElementById('year').innerHTML='';
  document.getElementById('country').innerHTML='';
  document.getElementById('totpop').innerHTML='';
  document.getElementById('mpop').innerHTML='';
  document.getElementById('percmpop').innerHTML='';
  document.getElementById('fpop').innerHTML='';
  document.getElementById('percfpop').innerHTML='';
  document.getElementById('popchange').innerHTML='';
  document.getElementById('percpopchange').innerHTML='';
  document.getElementById('netmigchg').innerHTML='';
  document.getElementById('percnetmigchg').innerHTML='';
  document.getElementById('percmigchg').innerHTML='';
  // document.getElementById('natpopchg').innerHTML='';
  // document.getElementById('percnatchg').innerHTML='';
  // document.getElementById('percnatpopchg').innerHTML='';
};

function yearselector(yr) {
  document.getElementById(yr).addEventListener("click", (e) => {
    year = yr;
    document.getElementById("touch").checked = false;
    updatelocation(location);
  })
};

let years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
years.forEach(year => {
  yearselector(year);
}) 


let radiostatus = migpopchange;
  const radiopopulationchange = document.getElementById("popchangerad");
  const radionaturalpopulationchange = document.getElementById("natpopchangerad");
  const radiomigrationpopulationchange = document.getElementById("migpopchangerad");

  radiopopulationchange.addEventListener("click", (e) => {
    e.preventDefault();
    radiostatus = popchange;
    // delete the div
    document.getElementById("map").innerHTML="";
    // repopulate the div
    runpopulationchange();
  });

  radiomigrationpopulationchange.addEventListener("click", (e) => {
    e.preventDefault();
    radiostatus = migpopchange;
    // delete the div
    document.getElementById("map").innerHTML="";
    // repopulate the div
    runpopulationchange();
  });


function runpopulationchange() {
const countries = topojson.feature(world, world.objects.countries);
let chart = Choropleth(hale, {
  id: d => d.name, // country name, e.g. Zimbabwe
  range: d3.interpolateYlGnBu,
  features: countries,
  featureId: d => d.properties.name, // i.e., not ISO 3166-1 numeric
  borders: countrymesh,
  projection: d3.geoEqualEarth(),
  title: (_, d) => d ? d.name : '',
  colorbuckets: migbuck,
  countryvalue: radiostatus,
  cb: async (_, i) => {
    let loc = locations.data.find((loc) => {
      return loc.name === i.properties.name
    })
    if (!loc) return;
    location = loc;
    updatelocation(loc);
  }
})

document.getElementById("map").appendChild(chart)}
runpopulationchange();




