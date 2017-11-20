'use strict';

// choropleth representing number killed in each state in 2016-2017

// file with code:state kv pair
var source = "https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv";

var stateCodes = {};

d3.csv(source, data => {
    data.map(d => {
        stateCodes[d["state"]] = d["code"];
        return stateCodes;   
    });
});

console.log(stateCodes);

/*
// get "State" from each incident
d3.csv("./shootings2016to2017.csv", data => {
    console.log(data[0]);
});
*/

var requestURL = "https://api.mapbox.com/geocoding/v5/{mode}/{query}.json?access_token=pk.eyJ1IjoiY2hhbnZlcnN1cyIsImEiOiJjamE3cmJxdDMxMTU5MzJsbDdlM2d5OGFqIn0.Od7n9c17-jouVVYbaMWOsg";