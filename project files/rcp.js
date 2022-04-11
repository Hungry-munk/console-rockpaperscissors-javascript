let result,
    comScore=0,
    userScore=0,
    userChoice

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

// not neeed anymore
// function displayScore(){
//     if (comScore>userScore){
//         console.log(`the scores are\ncomputer :${comScore} User :${userScore} \nComputer is Winning!`)
//     }else if(comScore<userScore){
//         console.log(`the scores are\ncomputer :${comScore} User :${userScore} \nUser is Winning!`)
//     }else{
//         console.log(`the scores are\ncomputer :${comScore} User :${userScore} \ curently it's a Draw!`)
//     }

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

    document.getElementById('result').textContent = result;
    document.getElementById('uscore').textContent = userScore;
    document.getElementById('cscore').textContent = comScore;

    //saying who is winning even tohugh you can look at scores
    document.getElementById('winner'). textContent = comScore == userScore ? 'Its a draw' : 
        comScore > userScore ? 'computer is winning':"user is winning";
};

const btns = document.querySelectorAll('button')

btns.forEach(btn =>{
    btn.addEventListener('click', ()=>  {

        if (btn.id == 'rock')userChoice = 'rock';//checking whatr button was clicked
        else if (btn.id == 'paper')userChoice = 'paper';
        else if (btn.id == 'scissors')userChoice = 'scissors';

        match(userChoice,getComputerChoice());
        
    });
});



    //not needed any more
    // if(userChoice=='quit'||null){
    //     console.log('game Finished!')
    //     let finalResult;
    //     if (comScore>userScore){
    //         finalResult=`the scores are\ncomputer :${comScore} User :${userScore} \nComputer Wins!`
    //     }else if(comScore<userScore){
    //         finalResult=`the scores are\ncomputer :${comScore} User :${userScore} \nUser Wins!`
    //     }else{
    //         finalResult=`the scores are\ncomputer :${comScore} User :${userScore} \ Draw!`
    //     }
    //     console.log(finalResult)
    // }else if(userChoice=='score'){displayScore()
    // }else{match(userChoice,getComputerChoice())};
