var inquirer = require('inquirer');

var questions = require('./clozequestions.js');

var Clozecard = require('./clozecards.js');

var clozeArray = [];

for (var i = 0; i < questions.length; i++) {
	var q = new Clozecard(questions[i].full, questions[i].cloze);
	clozeArray.push(q);
}
var count = 0

function askQuestions() {
	inquirer.prompt([
	{
		type: "input",
		message: clozeArray[count].partial,
		name: "userAnswer"
	},
	]).then(function(answers) {
		if (answers.userAnswer.toLowerCase() === clozeArray[count].cloze.toLowerCase()) {
			console.log("Correct!")
		}
		else {
			console.log("The correct answer is: " + clozeArray[count].cloze)
		}

	if (count < clozeArray.length - 1) {
			count++;
			askQuestions();
		} else {
			console.log('Game Over!');
			inquirer.prompt([
    {
    	name: "retry",
    	type: "confirm",
    	message: "Would you like to retry?",
    	default: false
    },
    ]).then(function(answers) {
    	if (answers.retry === true) {
    		console.log("-------------------");
    		console.log("Here We Go Again!");
    		console.log("-------------------");
    		count = 0;
    		askQuestions();
    	}
    	else {
    		console.log("Thank you for playing.")
    	};
});
		};
});
};
askQuestions();

