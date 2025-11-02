let userScore = document.querySelector("#userScore");
let botScore = document.querySelector("#compScore");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".commands");
const compView = document.querySelector(".comp-choice");
const compViewDiv = document.querySelector(".choice-div");

const compChoice = () => {
  let ele = ["rock", "paper", "scissor"];
  let idx = Math.floor(Math.random() * 3);
  return ele[idx];
};

const draw = () => {
  msg.innerText= "It's Draw Play Again";
  msg.style.backgroundColor= "Black";
};

const showWinner = (userWin) => {
  if (userWin){
    msg.innerText= "You Win";
    msg.style.backgroundColor= "green";
    userScore.innerText++;
  }else{
    msg.innerText= "You Lose";
    msg.style.backgroundColor= "red";
    botScore.innerText++;
  }
};
const game = (userChoice) => {
  console.log("user Choice =", userChoice);
  let computerChoice = compChoice();
  console.log("Computer Choice =", computerChoice);
  compView.innerText= (computerChoice);
  compViewDiv.style.visibility= "visible";

  if (userChoice === computerChoice) {
    draw();
  } else {
    let userWin = false;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ?false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    game(userChoice);
  });
});
