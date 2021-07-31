
var readlineSync = require('readline-sync');
const chalk = require('chalk');
 var userName = readlineSync.question("Hello friend! What's your name? ");
   console.log (" ");
console.log(chalk.bgYellow("Welcome "+userName+" to an amazing quiz game!"));
 console.log (" ");
console.log(chalk.bgRed("Guess the marvel character!"));
 console.log(chalk.yellow("-------------------"));
 console.log(chalk.red("Choose the correct option to play the game, and know your score."));
 console.log(chalk.yellow("-------------------"));
var questionOne = {
  question: "Superpowers: Strength, agility, stamina, healing ability, expert tactician, indestructible shield. ",
  answer: ['Captain America', 'Captain Marvel', 'Dr. Strange', 'Falcon'],
  correctAnswer: 0
}
var questionTwo = {
  question: "Superpowers: a durability of dense wood; ability to extend body, generate flowers, twigs and leaves. ",
  answer: ['Captain America', 'Groot', 'Hawkeye', 'Iron Man'],
  correctAnswer:1
}
var questionThree = {
  question: "Superpowers: Marksmanship, assassin, marital artist, knife & sword master and expert pilot. ",
  answer: ['Captain America', 'Hawkeye', 'Spider-Man','Falcon'],
  correctAnswer:1
}
var questionFour = {
  question: "Superpowers: Genius-level intellect, multiple powered armor suits, ability to fly. ",
  answer: ['Captain America', 'Hawkeye', 'Iron Man', 'Spider-Man'],
  correctAnswer:2
}

var questionFive = {
  question: "Superpowers: Strength, jumping, leaping, speed, “danger sense” precognition, custom web-shooters. ",
  answer: ['Captain America', 'Iron Man', 'Spider-Man', 'Captain Marvel' ],
  correctAnswer:2
}
var questionSix = {
  question: "Superpowers: Strength, speed, stamina, resistant to most toxins, energy absorption and manipulation.",
  answer: ['Captain America', 'Iron Man', 'Captain Marvel', 'Dr. Strange'],
  correctAnswer:2
}
var questionSeven = {
  question: "Superpowers: Master Of Dreams ",
  answer: [ 'Iron Man', 'Captain Marvel','Falcon', 'Dr. Strange'],
  correctAnswer:3
}
var questionEight = {
  question: "Superpowers: Is A Bird Man ",
  answer: [  'Iron Man', 'Spider-Man', 'Captain Marvel', 'Falcon'],
  correctAnswer:3
}
var questionList = [questionOne,questionTwo,questionThree,questionFour, questionFive,questionSix,questionSeven,questionEight];

var score=0;
var highScore =[{Name: "Srishti", score: 6}];
function quiz(question, answer, cAns){
 var usersAnswer = readlineSync.keyInSelect(answer, question);
 if(usersAnswer === cAns){
   console.log(chalk.bgBlue("Right!"));
   score= score+1;
 }else{
   console.log(chalk.bgRed("Wrong!"));
 }
  console.log(chalk.green("Your score is "+ score));
console.log(chalk.yellow("-------------------"));
  console.log (" ");
}
for(var i=0;i<questionList.length;i++){
  quiz(questionList[i].question, questionList[i].answer ,questionList[i].correctAnswer)
}

console.log(chalk.bgBlue("Your Final Score is "+score));
  console.log (" ");

console.log(chalk.cyan("Want to compete with other friends of Srishti? Match your score with the high scorer if you think you have beaten the high score take a screenshot of your final score and share it! Thank you for playing the game - Do you know Srishti"));
  console.log (" ");

function compare(userScore, otherScore){
 if(userScore >= otherScore){
   console.log(chalk.bgBlue("Congratulations! You have reached the high score!"));
     console.log (" ");
console.log("The high score till date is "+otherScore);
 }else{
     console.log (" ");
   console.log(chalk.bgRed("Better Luck next time! You could not reach the high score"));
 }
}
compare(score,highScore[0].score);