let userScore = document.querySelector('#userscore');
let compScore = document.querySelector('#computerscore');
let message = document.querySelector('.message');


let uScore = 0;
let cScore = 0;
let msg = '';
let color = '';



function getComputerChoice(){
  let rand = Math.floor(Math.random() * 3);
if(rand === 0){ return 'rock'}
if(rand === 1){ return 'paper'}
if(rand === 2){ return 'scissor'}
}


function playGame(user,computer){
if(user === computer){
  console.log('The Game is Tie!')
  msg = 'The Game is Tie!';
  color = 'white';
}
else if(user === 'rock'){
  if(computer === 'scissor'){ console.log('User win');
    uScore +=1;
    msg = 'You Win!';
    color = 'green';
  }
  else{console.log('computer win');
  cScore +=1;
  msg = 'Computer Win';
  color = 'red';
}
}
else if(user === 'paper'){
  if(computer === 'rock'){ console.log('User win')
   uScore +=1;
   msg = 'You Win!';
   color = 'green';}
  else{console.log('computer win')
  cScore +=1;
  msg = 'Computer Win';
  color = 'red';
}
}
else if(user === 'scissor'){
  if(computer === 'paper'){ console.log('User win')
   uScore +=1;
   msg = 'You Win!';
   color = 'green';}
  else{console.log('computer win')
  cScore +=1;
  msg = 'Computer Win';
  color = 'red';
}
}
} // function closing


function updateScore(){
  userScore.innerHTML = uScore;
  compScore.innerHTML = cScore;
  message.innerHTML = msg;
  message.style.color = color;

}

console.log(uScore,cScore)

