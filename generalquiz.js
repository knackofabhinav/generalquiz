var readlineSync = require ('readline-sync');
var chalk = require('chalk');
var score=0;

var name=chalk.bold("WHat is your name ? ");
var username = readlineSync.question(name);
var upper = username.toUpperCase();
console.log("Welcome ",chalk.cyanBright(upper),"to 'General Question Quiz'");
console.log("\n")
console.log("You can type option as your answer as well as you can also type the answer, Quiz starts from here: \n");





function play(answer,anotherAnswer)
 {
   console.log();
   var userAnswer = readlineSync.question("Answer?: ");
   var res = userAnswer.toLowerCase();
   

   if((res == answer)||(res == anotherAnswer))
   {
     console.log(chalk.bold('BINGO !!'),'You are right man!!')
     score= score+1;
     console.log(chalk.magentaBright.bold("Current score:"),chalk.cyanBright(score));
     console.log(" ")
   }
   else
   {
     console.log(chalk.bold("OOPS!!!,You are wrong bhidu!!!"));
     console.log(" The Right answer is:",chalk.bold(anotherAnswer));
     score= score-1;
     console.log(chalk.magentaBright.bold("Current score:"),chalk.cyanBright(score));
     console.log(" ")
    }
 }


var array =[
  {
  question:"Internet Fame Restaurant 'Baba ka Dhaba' located in which indian city?\na = Chennai\nb = Mumbai\nc = Delhi\nd = Banglore",
  answer:"c",
  answerTwo:"delhi"
},
{
  question:"What does the command prompt uses?\na = GUI\nb = CLI\nc = TUI\nd = None of the above",
  answer:"b",
  answerTwo:"cli"
},
{
  question:"Who is the creator of NatGeo.Camp?\na = Anmol Ahuja\nb = Akanksha Pratap\nc = Bill Gates\nd = Tanay Pratap",
  answer:"d",
  answerTwo:"tanay pratap"
},
{
  question:"In which Year did Java developed?\na = 1992\nb = 1993\nc = 1994\nd = 1995",
  answer:"d",
  answerTwo:"1995"
},
{
question: "Covid-19 virus first observed in which country?\na = China\nb = U.S.A\nc = India\nd = Russia",
answer: "a",
answerTwo:"china"

},
{ question:"Who won IPL 2020 title?\na = Chennai Super Kings\nb = Mumbai Indians\nc = Delhi Capitals\nd = Royal Challenger Banglore",
answer:"b",
answerTwo:"mumbai indians"
},
{
 question:"Python was developed by ?\na = James Gosling\nb = Guido van Rossum\nc = Brendan Eich\nd = Dennis M. Ritchie" ,
 answer:"b",
 answerTwo:"Guido van Rossum"
},
{ question: 'Atal Tunnel which was inaugurated in year 2020 situated at which place?\na = Kangra\nb = Leh\nc = Rohtang\nd = Srinagar',
answer:"c",
answerTwo:"rohtang"

},

{
  question:"Which is more older Python or Java?\na = Python\nb = Java ",
  answer:"a",
  answerTwo:"python"
},
{
  question:"Is the Level 0 of NatGeo.Camp is free of cost\na = Yes\nb = No",
  answer:"a",
  answerTwo:"yes"
}
];
for(var i=0;i<array.length;i++)
{
  console.log("Ques",(i+1),':', chalk.bold(array[i].question));
  play(array[i].answer, array[i].answerTwo);
} 
console.log(chalk.bold("\n\t Your Final score is:"),chalk.cyanBright(score));

if(score==10)
{
  console.log(chalk.bold("\nCongrats you got Full Score, You have very high Knowledge Share it!!!"));
}
else {
  if((score==8)||(score==9))
  {
    console.log("\tYou score good!!,Congrats");
  }
  else{
    if((score>=5)&&(score<8))
    {
    console.log("You score is average, Keep it Up!!");
   }
   else
   {
     console.log("You are below average,Blown up Hard!!");
   }

  }
}