'use strict';

// choropleth representing number killed in each state in 2016-2017

// file with code:state kv pair
var codeSource = "https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv";

var dataSource = "./shootings2016to2017.csv";

d3.csv(dataSource, (error, data) => {
    if(error) throw error;
    data.forEach(d => {
        d.Killed = +d.Killed;
        d.Injured = +d.Injured;
    });
    console.log(data);
}); 

// display dataset on browser
var displayData;

d3.select('main')
    .append(`p`)
    .text(`Hello world`);

// groupData = [stateCodes, dataset];


/*
// match state codes with states by lookup
dataset.forEach(function(data) {
    var result = stateCodes.filter(function(entry) {
        return stateCodes.state === dataset.state;
    });
    delete dataset.state;
    dataset.state = (result[0] !== undefined) ? result[0].name : null;
});
console.log(dataset);
*/

// create lookup table
d3.csv(codeSource, data => {
    var stateCodes = {};
    data.map((d, i) => {
        stateCodes[d["state"].trim()] = d["code"];
    });
    console.log(stateCodes);
});

/* 
// render choropleth
d3.csv(source, (err, rows) => {
    function unpack(rows, key) {
        return rows.map((row => { return row[key]; });
    }

    var data = [{
        type : 'choropleth',
        locations: unpack(rows, 'code'),
        z: unpack(rows, )
    }];
    return 0;
});
*/

/*
// get "State" from each incident
d3.csv("./shootings2016to2017.csv", data => {
    console.log(data[0]);
});
*/

var requestURL = "https://api.mapbox.com/geocoding/v5/{mode}/{query}.json?access_token=pk.eyJ1IjoiY2hhbnZlcnN1cyIsImEiOiJjamE3cmJxdDMxMTU5MzJsbDdlM2d5OGFqIn0.Od7n9c17-jouVVYbaMWOsg";