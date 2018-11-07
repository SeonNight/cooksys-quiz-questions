'use strict';

var _lib = require('./lib');

// TODO read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json
console.log(readFromFile('/lib/createPrompt.json')); // TODO import readFile, writeFile, chooseRandom, createPrompt, and createQuestions

console.log(writeToFile('/lib/cp_solutions.json'));

// TODO read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json
console.log(readFromFile('/lib/createQuestions.json'));
console.log(writeToFile('/lib/cq_solutions.json'));

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function readFromFile(filePath) {
    return filePath;
}
function writeToFile(filePath) {
    return filePath;
}