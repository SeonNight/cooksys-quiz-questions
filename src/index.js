// TODO import readFile, writeFile, chooseRandom, createPrompt, and createQuestions
import {chooseRandom, createPrompt, createQuestions} from './lib'

// TODO read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json

//console.log(readFromFile('/lib/createPrompt.json'))
//console.log(writeToFile('/lib/cp_solutions.json'))
//console.log(createPrompt({numQuestions: 2, numChoices: 2}))
//console.log(createPrompt())

// TODO read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json

//console.log(readFromFile('/lib/createQuestions.json'))
//console.log(writeToFile('/lib/cq_solutions.json'))

console.log(createQuestions({
    'question-1': 'Do you think you\'re ready for this?',
    'question-1-choice-1': 'Beyond ready!!!',
    'question-1-choice-2': 'Totally!',
    'question-2': 'Are you loving JS yet?',
    'question-2-choice-1': 'It\'s tubular!',
    'question-2-choice-2': 'Way rad man!'
  }))



function readFromFile(filePath) {
    return filePath
}
function writeToFile(filePath) {
    return filePath
}