'use strict';

//grabbing elements of the scores
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")


const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
let currentScore0 = document.querySelector("#current--0")
let currentScore1 = document.querySelector("#current--1")


const scores =[0,0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//beginning conditions for the game
score0.textContent = 0;
score1.textContent = 0;
const diceEl = document.querySelector(".dice")
diceEl.classList.add("hidden");

//Rolling dice and starting game
function switchPlayer(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active")
  player1.classList.toggle("player--active")
}

btnRoll.addEventListener("click",function(){
  if(playing){
  const randomNum = Math.trunc(Math.random()*6+1)
  diceEl.classList.remove("hidden");
  diceEl.src = `dicePics/dice-${randomNum}.png`;

  if(randomNum!==1){
    currentScore+=randomNum;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
  else{
    switchPlayer();
  }
}
})
btnHold.addEventListener("click",function(){
  if(playing){
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  if(scores[activePlayer]>=100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    diceEl.classList.add("hidden");
    playing = false;
  }
  else{
    switchPlayer();
  }
}
})
btnNew.addEventListener("click",function(){
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentScore =0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

})
