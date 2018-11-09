'use strict';

var _lib = require('./lib');

var _fs = require('fs');

//Read file, do a function on it, choosRandom, and then output
// Import readFile, writeFile, chooseRandom, createPrompt, and createQuestions
const readWrite = (f, fileOutput) => (err, data) => {
    if (err) {
        //throw err
        console.log(err);
    } else {
        (0, _fs.writeFile)(fileOutput, JSON.stringify((0, _lib.chooseRandom)(f(JSON.parse(data))), null, 2), err => {
            if (err) {
                console.log(err);
            } else console.log('File saved successfully');
        });
    }
};

// Read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json

//Import read and write files
const readWritePrompt = readWrite(_lib.createPrompt, 'cp_solutions.json');
(0, _fs.readFile)('lib/createPrompt.json', readWritePrompt);

// Read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json
const readWriteQuestions = readWrite(_lib.createQuestions, 'cq_solutions.json');
(0, _fs.readFile)('lib/createQuestions.json', readWriteQuestions);