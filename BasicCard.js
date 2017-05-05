var inquirer = require("inquirer");
var basicCard = function(front, back) {
    this.front = front;
    this.back = back;
};
 var one = new basicCard("Who is the lead singer for Metallica?  ", "James Hetfield")
 var two = new basicCard("What is the zero calorie Coca-Cola option called?  ", "coke zero")
 var three = new basicCard("What actor narrated 2002's 'How the Grinch Stole Christmas?'  ", "Anthony Hopkins")
 var four = new basicCard("The Chevy Corvette's original color was what?  ", "white")
 var five = new basicCard("_______ is the company that just released the new videogame console, Switch?  ", "nintendo")

function basicGame() {
inquirer.prompt([
{
    name: "one",
    message: one.front
}, 
]).then(function(answers) {
    
	if (answers.one.toLowerCase() === one.back.toLowerCase()) {
        console.log("Correct MetalHead!")
        console.log("--------------------------");
    }
    else {
        console.log("Get better taste in music; the correct answer is James Hetfield");
        console.log("--------------------------");
    };

inquirer.prompt([
	{
    name: "two",
    message: two.front
},
]).then(function(answers) {
	if (answers.two.toLowerCase() === two.back.toLowerCase()) {
        console.log("Correct Calorie Counter!")
        console.log("--------------------------");
    }
    else {
        console.log("Get better taste in soda; the correct answer is Coke Zero")
        console.log("--------------------------");
    };

inquirer.prompt([
{
	name: "three",
	message: three.front
},
]).then(function(answers) {
	if (answers.three.toLowerCase() === three.back.toLowerCase()) {
        console.log("Correct Film Buff!")
        console.log("--------------------------");
    }
    else {
        console.log("Get better taste in movies; the correct answer is Anthony Hopkins")
        console.log("--------------------------");
    };

inquirer.prompt([
{
	name: "four",
	message: four.front
},
]).then(function(answers) {
	if (answers.four.toLowerCase() === four.back.toLowerCase()) {
        console.log("Correct Gearhead!")
        console.log("--------------------------");
    }
    else {
        console.log("Get better taste in cars; the correct answer is White")
        console.log("--------------------------");
    };
inquirer.prompt([
{
	name: "five",
	message: five.front
},
]).then(function(answers) {
	if (answers.five.toLowerCase() === five.back.toLowerCase()) {
        console.log("Correct Nerd!")
        console.log("--------------------------");
    }
    else {
        console.log("Get better taste in videogames; the correct answer is Nintendo")
        console.log("--------------------------");
    };

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
    		basicGame();
    	}
    	else {
    		console.log("Thank you for playing.")
    	};
});
});
});
});	
});
});
};
basicGame();
