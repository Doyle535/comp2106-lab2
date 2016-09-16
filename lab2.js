
var userChoice = prompt('Rock, Paper, Scissors!');
var computerChoice = Math.random();

if(computerChoice < .34){
  computerChoice = 'Rock';
}else if(computerChoice < .67){
  computerChoice = "Paper";
}else{
  computerChoice = 'Scissors';
}

var compare = function(choice1, choice2){
  console.log('Player: ' + choice1);
  console.log('Computer: ' +choice2);
  if(choice1 === choice2){
    return "Tie!";
  }
  else if(choice1 === 'Rock'){
    if(choice2 === 'Paper'){
      return 'Computer wins!';
    }else{
      return 'Player wins!';
    }
  }
  else if(choice1 === 'Paper'){
    if(choice2 === 'Scissors'){
      return 'Computer wins!';
  }else{
    return 'Player wins!';
  }
  }
  else{
    if(choice2 === 'Rock'){
      return 'Computer wins!';
    }else{
      return 'Player wins!';
    }
  }

}

console.log(compare(userChoice, computerChoice));
