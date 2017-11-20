'use strict';

// choropleth representing number killed in each state in 2016-2017

// get "State" from each incident
d3.csv("./shootings2016to2017.csv", data => {
    console.log(data[0]);
});

console.log("hello");

var requestURL = "https://api.mapbox.com/geocoding/v5/{mode}/{query}.json?access_token=pk.eyJ1IjoiY2hhbnZlcnN1cyIsImEiOiJjamE3cmJxdDMxMTU5MzJsbDdlM2d5OGFqIn0.Od7n9c17-jouVVYbaMWOsg";