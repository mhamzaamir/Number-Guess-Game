const checkMe = document.getElementById("check-me");
const restart = document.getElementById("restart");
const inputfield = document.getElementById("input-field");

let guesses = [];
let correctNumber = checkRandomNumber();

window.onload = function () {
  checkMe.addEventListener("click", checkMeBtn);
  restart.addEventListener("click", restartBtn);
};
const checkMeBtn = () => {
  let inputfield = document.getElementById("input-field").value;
  correctNumber = checkRandomNumber();
  displayResults();
  saveHistory(inputfield);
  displaySaveHistory(inputfield);
};
const restartBtn = () => {
  inputfield.value = "";
  correctNumber = checkRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displaySaveHistory();
  document.getElementById("history").innerText = "";

  //console.log(guesses);
};
function checkRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}
function displayResults() {
  let userInput = parseInt(inputfield.value);
  checkRandomNumber();
  if (!userInput) {
  } else {
    if (userInput > correctNumber) {
      //console.log('Too High')
      showYourGuessIsHigh();
    } else if (userInput < correctNumber) {
      //console.log('Too Low')
      showYourGuessIsLow();
    } else {
      //console.log('Number is correct')
      showYouWon();
    }
  }
  //console.log(correctNumber)
}
function updateResults(alerType, message) {
  let type;
  switch (alerType) {
    case "warning":
      type = `<div class="alert alert-warning container" role="alert" style="width: 500px; ">`;
      break;
    case "success":
      type = `<div class="alert alert-success container" role="alert" style="width: 500px; ">`;
      break;
  }
  type += message;
  type += `</div>`;
  return type;
}
function showYouWon() {
  const message = "Awesome, you got it!";
  let type = updateResults("success", message);
  document.getElementById("result").innerHTML = type;
}
function showYourGuessIsHigh() {
  const message = "Your guess it too high!";
  let type = updateResults("warning", message);
  document.getElementById("result").innerHTML = type;
}

function showYourGuessIsLow() {
  const message = "Your guess is too Low!";
  let type = updateResults("warning", message);
  document.getElementById("result").innerHTML = type;
}
function saveHistory(guess) {
  guesses.push(guess);
  //console.log(guesses);
}
function displaySaveHistory(inputfield) {
  if (!inputfield) {
    document.getElementById(
      "history"
    ).innerHTML = `<h2 class='container mt-3'>Please fill the required fields!</h2>`;
  } else {
    let index = guesses.length - 1;
    let list = `<ul class='list-group container my-4'>`;
    while (index >= 0) {
      list +=
        `<li class='list-group-item container '>` +
        "You have guessed" +
        "  " +
        guesses[index] +
        `</li>`;
      index -= 1;
    }
    list += `</ul>`;
    document.getElementById("history").innerHTML = list;
  }
}
