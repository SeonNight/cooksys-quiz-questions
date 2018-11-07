"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// TODO copy chooseRandom() from previous assignment
const chooseRandom = (array, numItems) => {
    return array === undefined ? [] //If array is undefined return an empty array
    : array.length < 2 ? array //If array has the length of 0 or 1 just return the array
    : array.slice().map((cur, ind, curArray) => {
        //Create a random array with given length
        return curArray.splice(Math.floor(Math.random() * (array.length - ind)) + ind, 1, curArray[ind])[0];
    }).splice(0, numItems === undefined || numItems < 1 || numItems > array.length ? Math.floor(Math.random() * array.length) + 1 //If given number is invalid return a number between 1 and array length
    : numItems);
};

// TODO implement createPrompt()
const createPrompt = input => {
    //Default question = 1 default choice is 2
    console.log("----------------------------");
    console.log("Creating Prompt");
    console.log(input);
    let questNum;
    let choiceNum;
    if (input === undefined) {
        questNum = 1;
        choiceNum = 2;
    } else {
        questNum = input["numQuestions"];
        choiceNum = input["numChoices"];
        if (questNum === undefined) {
            questNum = 1;
        }
        if (choiceNum === undefined) {
            choiceNum = 2;
        }
    }
    let prompt = new Array();
    for (let i = 1; i <= questNum; i++) {
        prompt.push({
            type: 'input',
            name: `question-${i}`,
            message: `Enter question ${i}`
        });
        for (let n = 1; n <= choiceNum; n++) {
            prompt.push({
                type: 'input',
                name: `question-${i}-choice-${n}`,
                message: `Enter answer choice ${n} for question ${i}`
            });
        }
    }
    console.log(prompt.length);
    console.log(prompt);
    console.log("----------------------------");
    return prompt;
};

// TODO implement createQuestions()
const createQuestions = questions => {
    if (questions === undefined) {
        return [];
    }
    let createdQuestions = new Array();
    console.log("Creating Questions");
    console.log(questions);

    let questionNames = Object.keys(questions).map(key => key).filter(key => !key.includes("choice"));
    for (let i = 0; i < questionNames.length; i++) {
        let newQuestion = {
            type: 'list',
            name: questionNames[i],
            message: questions[questionNames[i]],
            choices: Object.keys(questions).filter(key => key.indexOf(questionNames[i] + '-choice-') == 0).map(key => questions[key])
        };
        console.log(newQuestion);
        createdQuestions.push(newQuestion);
    }
    console.log("-------------");
    console.log(createdQuestions);
    return createdQuestions;
};

// TODO export above functions
exports.chooseRandom = chooseRandom;
exports.createPrompt = createPrompt;
exports.createQuestions = createQuestions;