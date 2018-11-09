// Import readFile, writeFile, chooseRandom, createPrompt, and createQuestions
import {chooseRandom, createPrompt, createQuestions} from './lib'
//Import read and write files
import {readFile,writeFile} from 'fs'

//Read file, do a function on it, choosRandom, and then output
const readWrite = (f,fileOutput) => (err, data) => {
    if(err) {//throw err
        console.log(err)
    }
    else {
        writeFile(fileOutput, JSON.stringify(
            chooseRandom(f(JSON.parse(data))),null,2),
                (err) => {if(err) {console.log(err)} else console.log('File saved successfully')})
    }
}

// Read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json
const readWritePrompt = readWrite(createPrompt,'cp_solutions.json')
readFile('lib/createPrompt.json',readWritePrompt)

// Read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json
const readWriteQuestions = readWrite(createQuestions,'cq_solutions.json')
readFile('lib/createQuestions.json',readWriteQuestions)