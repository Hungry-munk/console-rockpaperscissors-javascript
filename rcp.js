let result,
    comScore=0,
    userScore=0,
    userChoice;

function getUserChoice(){
    userChoice=prompt("enter rock, paper or scissors")

    if (typeof userChoice==='string'){userChoice=userChoice.toLowerCase()}//if userchoice is string convert to lower case

    const choices = ['rock','paper','scissors','quit','score',null]
    if (!(choices.includes(userChoice))){
        while (!(choices.includes(userChoice))){
                userChoice=prompt("Invalid answer try again!\nto see scores or quit enter 'score' or 'quit'\nenter rock, paper or scissors").toLowerCase()
                // if (typeof userChoice=='string'){userChoice.toLowerCase()}
            };
    };
};

function getComputerChoice(){//choosing an answer for the computer
    let choice = ["rock","paper","scissors"],
        randomNum = Math.floor(Math.random()*choice.length)
        return choice[randomNum]
};
function displayScore(){
    if (comScore>userScore){
        console.log(`the scores are\ncomputer :${comScore} User :${userScore} \nComputer is Winning!`)
    }else if(comScore<userScore){
        console.log(`the scores are\ncomputer :${comScore} User :${userScore} \nUser is Winning!`)
    }else{
        console.log(`the scores are\ncomputer :${comScore} User :${userScore} \ curently it's a Draw!`)
    }

}
function match(userChoice,comChoice){
    if (userChoice===comChoice){
        result = "You Draw!"
    }else{
    switch (userChoice+comChoice) {
        case 'rockscissors':
        case 'paperrock':
        case "scissrospaper":
            result=`You Win! ${userChoice} beats ${comChoice}`
            userScore++
            break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            result=`You loose! ${userChoice} looses to ${comChoice}`
            comScore++
            break;
        };
    };

    console.log(result)
};

while(true){
    getUserChoice()
    
    if(userChoice=='quit'||null){
        console.log('game Finished!')
        let finalResult;
        if (comScore>userScore){
            finalResult=`the scores are\ncomputer :${comScore} User :${userScore} \nComputer Wins!`
        }else if(comScore<userScore){
            finalResult=`the scores are\ncomputer :${comScore} User :${userScore} \nUser Wins!`
        }else{
            finalResult=`the scores are\ncomputer :${comScore} User :${userScore} \ Draw!`
        }
        console.log(finalResult)
        break
    }else if(userChoice=='score'){displayScore()
    }else{match(userChoice,getComputerChoice())};

};
//adding code
//to update on github