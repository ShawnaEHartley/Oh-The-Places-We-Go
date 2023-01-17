import countries from "./world.json" assert { type: 'json' };
import unlookup from './locations.json' assert { type: 'json' };
import fetch from 'node-fetch';
import fs from 'fs';

const namechangelist = [];

async function main() {
const geos = countries.objects.countries.geometries;
const locs = [];

for (let i = 0; i < unlookup.data.length; i++) {
  const ele = unlookup.data[i];
  locs.push(ele.name)
}

for (let i = 0; i < geos.length; i++) {
  const ele = geos[i].properties.name;
  if (!locs.includes(ele)) {
    console.log(`adding ${geos[i].properties.name}`)
    namechangelist.push(ele);
  }
}
const listnmchg = JSON.stringify(namechangelist)
fs.writeFileSync('./listofnamechangesv2.json', listnmchg)
}
main()