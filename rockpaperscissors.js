const getUserChoice = (userInput) => {
  console.log(userInput);
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "the game was a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
    } else {
      return "User won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer won";
    } else {
      return "user won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer won";
    } else {
      return "user won";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("your choice" + getUserChoice);
  console.log("computer choice" + getComputerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
