const map = {
    id: d => d.name, // country name, e.g. Zimbabwe
    value: d => d.hale, // health-adjusted life expectancy
    range: d3.interpolateYlGnBu,
    features: countries,
    featureId: d => d.properties.name, // i.e., not ISO 3166-1 numeric
    borders: countrymesh,
    projection: d3.geoEqualEarth(),
    width
}
export default map

