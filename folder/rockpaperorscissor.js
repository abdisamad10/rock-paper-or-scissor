
const getUserChoice = userInput =>{
 userInput = userInput.toLowerCase();

if(userInput === 'rock' || userInput === 'paper'   ||  userInput === 'scissor'){
  return userInput;
}else{
  console.log('Error!');
}
  };

  function getComputerChoice (){
    switch(Math.floor(Math.random())*3){
      case 0:
      return 'paper';
      break;
      case 1:
      return 'rock';
      break;
      case 2:
      return 'scissor';
      break;

    }
  }



  function determineWinner(userChoice , computerChoice){
if (userChoice === computerChoice) {
  return 'The game is a tie!';
}



  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'the computer won!';

    }else{
      return 'you won!';
    }
  }

  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}


if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

 }

//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'rock'));

const playGame =() =>{
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice , computerChoice ));
};

playGame();



