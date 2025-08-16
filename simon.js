let gameSeq = [];
let userSeq = [];
let btns = ["red","green","blue","yellow"];
let h4 = document.querySelector("h4")

let start = false;
let level = 0;

document.addEventListener("keypress", function(){
  if (start == false) {
    console.log("Game started");
    start = true;
    levelup();
  }
});

function gameFlash(btn) {
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},250)
}

function userFlash(btn) {
btn.classList.add("userFlash");
setTimeout(function(){
  btn.classList.remove("userFlash");
},250)
}

function levelup(){
  userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random()*4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`#${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function check(index) {
  if (userSeq[index] === gameSeq[index]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h4.innerHTML = `Game Over!! Your score was <b>${level}</b> <br>Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },250);
    reset();
  }
}


function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
 // console.log(userColor);
  userSeq.push(userColor);
  //console.log(userSeq);
  check(userSeq.length-1);
}

let buttons = document.querySelectorAll(".btn");
for (let button of buttons) {
  button.addEventListener("click", btnPress);
}

function reset(){
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}