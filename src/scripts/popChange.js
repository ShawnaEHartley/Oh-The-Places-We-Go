import locs from "./locations.json" assert { type: 'json' };
import fetch from 'node-fetch';
import fs from 'fs';
// console.log(typeof locs)

const popchangelist = [];


async function main() {
  for (let i = 0; i < 284; i++) {
    const loc = locs.data[i];

    console.log(`processing ${loc.name}`);
    const totpop = await fetch (`https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/${loc.id}/start/2020/end/2020`);
    const dta = await totpop.json();
    if (!dta.data || !dta.data.length) { continue }
    const totalpop = dta.data[0].value;
  
    const popchg = await fetch (`https://population.un.org/dataportalapi/api/v1/data/indicators/50/locations/${loc.id}/start/2020/end/2020`);
    const dta2 = await popchg.json();
    if (!dta2.data || !dta2.data.length) { continue }
    const popchange = dta2.data[0].value;
  
    const percpopchg = (popchange/totalpop) * 100;
    popchangelist.push({name: loc.name, totalpop: totalpop, popchange: popchange, percpopchange: percpopchg})
  }
  const listofpopchange = JSON.stringify(popchangelist)
  fs.writeFileSync('./listofpopchange.json', listofpopchange);
}

main()