'use strict';

// choropleth representing number killed in each state in 2016-2017

// file with code:state kv pair
var codeSource = "https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv";

var dataSource = "./shootings2016to2017.csv";

var dataset = d3.csv(dataSource, (data) => {
    return data;
});

d3.select('body')
    .append(dataset.map(data =>{
        
    }));

console.log(dataset);

// groupData = [stateCodes, dataset];

var stateCodes = {};
/*
dataset.forEach(function(data) {
    var result = stateCodes.filter(function(entry) {
        return stateCodes.state === dataset.state;
    });
    delete dataset.state;
    dataset.state = (result[0] !== undefined) ? result[0].name : null;
});
console.log(dataset);
*/

d3.csv(codeSource, data => {
    data.map(d => {
        stateCodes[d["state"].trim()] = d["code"];
        return stateCodes;   
    });
});

/*
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