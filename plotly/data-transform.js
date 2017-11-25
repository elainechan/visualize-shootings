function shuffle(arr) {
  var currentIndex = arr.length, 
      temporaryValue, 
      randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

var q1 = { 
    question: 'What',
    answers: [ 
        { key: 0, value: 'Apple' },
        { key: 1, value: 'Banana' },
        { key: 2, value: 'Cherry' },
        { key: 3, value: 'Dip'},
        { key: 4, value: 'Empanada' },
        { key: 5, value: "Falafel" }
    ]
};
console.log(`q1`, `\n`, `An object, one of whose objects within has a property which is an array of objects.`, `\n`, q1, `\n`);

console.log(`q1.answers`, `\n`, `Array of objects with labelled key-property pairs.`, `\n`, q1.answers, `\n`);

function getObjByLabelledKey(arrayOfObjects, keyName, value) {
    let targetObject = arrayOfObjects.filter(obj => {
        return obj[keyName] === value;
    });
    return targetObject;
}
console.log(`getObjByLabelledKey(q1.answers, 'key', 0)`, `\n`, `Given an array of objects with labelled key-property pairs (q1.answers), a specified key label ('key'), and the key itself (0), returns the target object containing the key.`, `\n`, getObjByLabelledKey(q1.answers, 'key', 0), `\n`);

function stripKeyValueLabels(arrOfObjs) { 
    var rObj = {};
    arrOfObjs.map(answer => {
        rObj[answer.key] = answer.value;
    });
    return rObj;
}
console.log(`stripKeyValueLabels(q1.answers)`, `\n`, `Given an array of objects with labelled key-property pairs, returns an object with unlabelled key-property pairs.`, `\n`, stripKeyValueLabels(q1.answers), `\n`);

function nakedValues(arrayOfObjects, zeroOrOne) { 
    var twoDArray = arrayOfObjects.map( (entry, i) => {
        return Object.values(arrayOfObjects[i]);
    });
    var oneDArray = twoDArray.map(entry => {
        return entry[zeroOrOne];
    });
    return oneDArray;
}
console.log(`nakedValues(q1.answers, 0)`, `\n`, `When called with 0, returns naked keys in an array.`, `\n`, nakedValues(q1.answers, 0), `\n`);
console.log(`nakedValues(q1.answers, 1)`, `\n`, `When called with 1, returns naked properties in an array.`, `\n`, nakedValues(q1.answers, 1), `\n`);

console.log(`Object.entries(q1.answers)`, `\n`, Object.entries(q1.answers), `\n`);


var nakedArray = ['Apple', 'Banana', 'Clementine'];
console.log(`var nakedArray =`, nakedArray, `;\n`);

// From naked array to indexed 2D array
Object.entries(nakedArray);
console.log(`Object.entries(nakedArray)`, `\n`, `Given a naked array, returns a two-dimensional array containing key-property pairs in subarrays, with the indexes of the naked array serving as keys.`, `\n`, Object.entries(nakedArray), `\n`);

// From naked array to object with array indexes as keys
function objectify(arr) {
    let obj = {};
    arr.map((entry, i) => { obj[i] = entry });
    return obj;
}
console.log(`objectify(nakedArray)`, `\n`, `Given a naked array, returns an object containing key-property pairs, with the indexes of the naked array serving as keys.`, `\n`, objectify(nakedArray), `\n`);

function labelKeysProperties() {}